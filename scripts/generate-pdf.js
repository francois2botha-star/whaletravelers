import puppeteer from 'puppeteer';
import path from 'path';

(async () => {
  const browser = await puppeteer.launch({args: ['--no-sandbox','--disable-setuid-sandbox']});
  const page = await browser.newPage();
  const filePath = path.resolve('./proposal/proposal.html');
  await page.goto('file://' + filePath, { waitUntil: 'networkidle0' });
  await page.pdf({path: 'proposal.pdf', format: 'A4', printBackground: true, margin: {top: '15mm', bottom: '15mm', left: '12mm', right: '12mm'}});
  await browser.close();
  console.log('PDF generated: proposal.pdf');
})();