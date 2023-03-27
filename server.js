const https = require('https');
const http = require('http');
const fs = require('fs');
const { parse } = require('url');

const next = require('next');
const dev = false;
const hostname = '89.58.29.202';
const port = 443;
const portHttp = 80;
const app = next({ dev, hostname, port });
const handle = app.getRequestHandler();

const certDir = `/etc/letsencrypt/live`;
const domain = `eike-eric-wientjes.de`;
const options = {
    key: fs.readFileSync(`${certDir}/${domain}/privkey.pem`),
    cert: fs.readFileSync(`${certDir}/${domain}/fullchain.pem`)
};

app.prepare().then(() => {
    http.createServer(async (req, res) => {
        res.redirect('https://' + req.headers.host + req.url);
    }).listen(portHttp, err => {
        if (err) throw err
        console.log(`> Ready on localhost:${port}`)
    });

    https.createServer(options, async (req, res) => {
        const parsedUrl = parse(req.url, true);
        await handle(req, res, parsedUrl);
    }).listen(port, err => {
        if (err) throw err
        console.log(`> Ready on localhost:${port}`)
    });
})
