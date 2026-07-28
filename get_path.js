const https = require('https');

https.get('https://cdn.jsdelivr.net/npm/@svg-maps/india/index.js', (res) => {
  let data = '';
  res.on('data', (c) => data += c);
  res.on('end', () => {
    const match = data.match(/"id":"br","path":"([^"]+)"/);
    if(match) console.log(match[1]);
  });
});
