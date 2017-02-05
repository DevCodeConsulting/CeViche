#!/usr/bin/env node

let exec = require('child_process').exec;
let cheerio = require('cheerio')

function getTime () {
  const time = Math.floor((Math.random() * 10000) + 10000)
  console.log((time / 60) / 60)
  return time
}

(function doTheGentlyPush () {
  setTimeout(() => {
    exec('curl http://whatthecommit.com', (hej, html) => {
      let $ = cheerio.load(html)
      const message = $('#content p:first-child').text()
      console.log(`Commit message ${message}`)
      exec('git pull');
      exec(`git commit --allow-empty -m "${message}"`);
      exec('git push');
      doTheGentlyPush()
    });
  }, getTime());
})()
