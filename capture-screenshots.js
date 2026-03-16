const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

(async () => {
  const browser = await puppeteer.launch({
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });

  try {
    const page = await browser.newPage();
    await page.goto('http://localhost:3000/dashboard-demo', {
      waitUntil: 'networkidle2',
      timeout: 30000
    });

    // Ensure screenshots directory exists
    const screenshotsDir = path.join(__dirname, 'public/screenshots');
    if (!fs.existsSync(screenshotsDir)) {
      fs.mkdirSync(screenshotsDir, { recursive: true });
    }

    // Desktop screenshot (landscape)
    await page.setViewport({ width: 1440, height: 900 });
    await page.screenshot({
      path: path.join(screenshotsDir, 'dashboard-desktop.png'),
      type: 'png',
      omitBackground: false
    });
    console.log('✓ Desktop screenshot saved (1440x900)');

    // Tablet screenshot
    await page.setViewport({ width: 768, height: 1024 });
    await page.screenshot({
      path: path.join(screenshotsDir, 'dashboard-tablet.png'),
      type: 'png',
      omitBackground: false
    });
    console.log('✓ Tablet screenshot saved (768x1024)');

    // Mobile screenshot (portrait)
    await page.setViewport({ width: 375, height: 812 });
    await page.screenshot({
      path: path.join(screenshotsDir, 'dashboard-mobile.png'),
      type: 'png',
      omitBackground: false
    });
    console.log('✓ Mobile screenshot saved (375x812)');

    console.log('\n✅ All screenshots captured successfully!');
  } catch (error) {
    console.error('Error capturing screenshots:', error.message);
    process.exit(1);
  } finally {
    await browser.close();
  }
})();
