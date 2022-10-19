const https = require('https');
const fs = require('fs');
const path = require('path')
const { parse } = require('url');

const next = require('next')
const dev = false
const hostname = 'eike-wientjes.de'
const port = 443
// when using middleware `hostname` and `port` must be provided below
const app = next({ dev, hostname, port })
const handle = app.getRequestHandler()

var options = {
    key: fs.readFileSync('ssl/key.pem'),
    cert: fs.readFileSync('ssl/cert.pem'),
};

app.prepare().then(() => {
    https.createServer(options, async (req, res) => {
        const parsedUrl = parse(req.url, true);
        await handle(req, res, parsedUrl);
    }).listen(port, err => {
        if (err) throw err
        console.log(`> Ready on localhost:${port}`)
    })
})