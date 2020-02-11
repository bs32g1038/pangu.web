/* eslint-disable */
const express = require('express');
const next = require('next');
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

let proxy = require('http-proxy-middleware');

app.prepare().then(() => {
    const server = express();

    server.all('/next/', (req, res) => {
        return handle(req, res);
    });

    server.use(
        '/v1/api',
        proxy({
            target: 'http://127.0.0.1:8000',
            changeOrigin: true,
            onProxyReq(proxyReq, req) {
                Object.keys(req.headers).forEach(function(key) {
                    proxyReq.setHeader(key, req.headers[key]);
                });
            },
            onProxyRes(proxyRes, req, res) {
                Object.keys(proxyRes.headers).forEach(function(key) {
                    res.append(key, proxyRes.headers[key]);
                });
            }
        })
    );
    server.get(/^\/static\//, proxy({ target: 'http://127.0.0.1:8000', changeOrigin: true }));
    server.get(/^\/uploads\//, proxy({ target: 'http://127.0.0.1:8000', changeOrigin: true }));

    server.all('*', (req, res) => {
        return handle(req, res);
    });

    server.listen(3000, err => {
        if (err) throw err;
        console.log('> Ready on http://localhost:3000');
    });
});
