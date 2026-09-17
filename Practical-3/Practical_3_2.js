const http = require('http');
const { URL } = require('url');

const server = http.createServer((req, res) => {
    const url = new URL(req.url, `http://${req.headers.host}`);

    if (url.pathname === '/reverse') {
        const text = url.searchParams.get('text');

        if (text === null) {
            res.writeHead(400, { 'Content-Type': 'text/plain' });
            res.end('Please provide a text parameter.');
            return;
        }

        const reversed = text.split('').reverse().join('');

        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end(reversed);
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('404 - Page Not Found');
    }
});

server.listen(3000, () => {
    console.log('Server running at http://localhost:3000');
});
