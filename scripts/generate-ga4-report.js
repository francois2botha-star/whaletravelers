#!/usr/bin/env node
/*
  Simple GA4 monthly CSV report generator.
  Usage:
    - Set env var GOOGLE_APPLICATION_CREDENTIALS to the path of the service account JSON key,
      or set SERVICE_ACCOUNT_KEY to the raw JSON string.
    - Set GA4_PROPERTY_ID to your property numeric id (e.g. 123456789)
    - Run: node scripts/generate-ga4-report.js --month=2026-01

  The script fetches basic metrics (activeUsers, sessions, totalUsers) grouped by date
  and writes a CSV to ./reports/report-YYYY-MM.csv
*/

import fs from 'fs'
import path from 'path'
import { google } from 'googleapis'

function usage() {
  console.log('Usage: node scripts/generate-ga4-report.js --month=YYYY-MM')
  process.exit(1)
}

const args = Object.fromEntries(process.argv.slice(2).map(a => a.split('=').map(s => s.trim()).map((v,i)=> i?decodeURIComponent(v):v.replace(/^--/,''))))
const month = args.month || args.m || null
if (!month || !/^[0-9]{4}-[0-9]{2}$/.test(month)) usage()

const [year, mm] = month.split('-').map(Number)
const startDate = `${String(year).padStart(4,'0')}-${String(mm).padStart(2,'0')}-01`
const endDate = new Date(year, mm, 0) // last day of month
const endDateStr = `${endDate.getFullYear()}-${String(endDate.getMonth()+1).padStart(2,'0')}-${String(endDate.getDate()).padStart(2,'0')}`

const PROPERTY_ID = process.env.GA4_PROPERTY_ID || process.env.VITE_GA_ID || ''
if (!PROPERTY_ID) {
  console.error('Missing GA4 property id. Set GA4_PROPERTY_ID or VITE_GA_ID env var.')
  process.exit(1)
}

async function main() {
  // Authenticate
  let auth
  if (process.env.SERVICE_ACCOUNT_KEY) {
    const key = JSON.parse(process.env.SERVICE_ACCOUNT_KEY)
    auth = new google.auth.GoogleAuth({
      credentials: key,
      scopes: ['https://www.googleapis.com/auth/analytics.readonly']
    })
  } else if (process.env.GOOGLE_APPLICATION_CREDENTIALS) {
    auth = new google.auth.GoogleAuth({
      keyFile: process.env.GOOGLE_APPLICATION_CREDENTIALS,
      scopes: ['https://www.googleapis.com/auth/analytics.readonly']
    })
  } else {
    console.error('Set GOOGLE_APPLICATION_CREDENTIALS or SERVICE_ACCOUNT_KEY to authenticate a service account.')
    process.exit(1)
  }

  const client = await auth.getClient()
  const analyticsdata = google.analyticsdata({ version: 'v1beta', auth: client })

  const request = {
    property: `properties/${PROPERTY_ID}`,
    requestBody: {
      dateRanges: [{ startDate, endDate: endDateStr }],
      dimensions: [{ name: 'date' }],
      metrics: [{ name: 'activeUsers' }, { name: 'sessions' }, { name: 'totalUsers' }],
      limit: 10000
    }
  }

  console.log(`Fetching GA4 report for property ${PROPERTY_ID} from ${startDate} to ${endDateStr}...`)
  const res = await analyticsdata.properties.runReport(request)

  const rows = res.data.rows || []
  const headers = ['date','activeUsers','sessions','totalUsers']
  const out = [headers.join(',')]
  for (const r of rows) {
    const date = r.dimensionValues[0]?.value || ''
    const metrics = r.metricValues || []
    const values = [date, ...(metrics.map(m => m.value || '0'))]
    out.push(values.join(','))
  }

  const reportsDir = path.join(process.cwd(),'reports')
  if (!fs.existsSync(reportsDir)) fs.mkdirSync(reportsDir, { recursive: true })
  const outFile = path.join(reportsDir, `report-${year}-${String(mm).padStart(2,'0')}.csv`)
  fs.writeFileSync(outFile, out.join('\n'))
  console.log('Report written to', outFile)
}

main().catch(err => { console.error(err); process.exit(1) })
