const Chrome = require('./lib/chrome');
const sleep = require('./lib/sleep.js');
const fs = require('fs');
const path = require('path');

(async () => {
  // initialize browser
  const chrome = new Chrome("http://example.com", 0, 0, 800, 600, true);
  await chrome.start();
  await chrome.goto("https://www.browserscan.net/")
  await sleep(30000);
  chrome.quit();
  process.exit(0);
})();
