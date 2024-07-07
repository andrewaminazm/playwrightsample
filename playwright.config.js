// playwright.config.js
module.exports = {
    timeout: 300000,
    use: {
      headless: false, // Set to true to run tests in headless mode
      viewport: { width: 1280, height: 720 },
      ignoreHTTPSErrors: true,
    },
  };
  