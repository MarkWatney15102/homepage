const https = require('https');
const http = require('http');
const fs = require('fs');
const path = require('path')
const { parse } = require('url');

const next = require('next');
const dev = false;
const hostname = '89.58.29.202';
const port = 80;
const app = next({ dev, hostname, port });
const handle = app.getRequestHandler();

// var options = {
//     key: fs.readFileSync('ssl/key.pem'),
//     cert: fs.readFileSync('ssl/cert.pem'),
// };

app.prepare().then(() => {
    http.createServer(async (req, res) => {
        const parsedUrl = parse(req.url, true);
        await handle(req, res, parsedUrl);
    }).listen(port, err => {
        if (err) throw err
        console.log(`> Ready on localhost:${port}`)
    });

    //     const parsedUrl = parse(req.url, true);
    //     await handle(req, res, parsedUrl);
    // }).listen(port, err => {
    //     if (err) throw err
    //     console.log(`> Ready on localhost:${port}`)
    // })
})