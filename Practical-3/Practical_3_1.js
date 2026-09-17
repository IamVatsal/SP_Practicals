const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        // Home Page
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Home Page');
    } else if (req.url === '/exam') {
        // Exam Page - HTML Table
        res.writeHead(200, { 'Content-Type': 'text/html' });

        res.end(`
            <!DOCTYPE html>
            <html>
            <head>
                <title>Exam Details</title>
                <style>
                    table {
                        border-collapse: collapse;
                        width: 60%;
                    }
                    th, td {
                        border: 1px solid black;
                        padding: 10px;
                        text-align: center;
                    }
                    th {
                        background-color: #f2f2f2;
                    }
                </style>
            </head>
            <body>
                <h1>Exam Schedule</h1>

                <table>
                    <tr>
                        <th>Subject</th>
                        <th>Date</th>
                        <th>Time</th>
                    </tr>
                    <tr>
                        <td>Computer Networks</td>
                        <td>20 September 2026</td>
                        <td>10:00 AM</td>
                    </tr>
                    <tr>
                        <td>Machine Learning</td>
                        <td>22 September 2026</td>
                        <td>10:00 AM</td>
                    </tr>
                    <tr>
                        <td>Advanced Java</td>
                        <td>24 September 2026</td>
                        <td>10:00 AM</td>
                    </tr>
                </table>
            </body>
            </html>
        `);
    } else {
        // 404 - Page Not Found
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('404 - Page Not Found');
    }
});

server.listen(3000, () => {
    console.log('Server running at http://localhost:3000');
});
