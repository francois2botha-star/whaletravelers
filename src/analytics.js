// Lightweight Google Analytics (GA4) helper — does not require account credentials here.
export function initGA(measurementId) {
  if (!measurementId) return
  if (window.gtagInitialized) return
  const s = document.createElement('script')
  s.async = true
  s.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`
  document.head.appendChild(s)

  window.dataLayer = window.dataLayer || []
  function gtag(){window.dataLayer.push(arguments)}
  window.gtag = gtag
  window.gtagInitialized = true
  window.gtag('js', new Date())
  window.gtag('config', measurementId, { send_page_view: false })
}

export function logPageView(path) {
  try {
    if (window.gtag) {
      window.gtag('event', 'page_view', { page_path: path })
    }
  } catch (e) {
    // ignore
  }
}
