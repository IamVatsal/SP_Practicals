const http = require('http');
const mysql = require('mysql2');
const { URL } = require('url');

const con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'Node_test',
});

const server = http.createServer((req, res) => {
    const url = new URL(req.url, `http://${req.headers.host}`);

    // Display form
    if (url.pathname === '/') {
        res.writeHead(200, {
            'Content-Type': 'text/html',
        });

        res.end(`
            <h1>Delete Product</h1>

            <form action="/delete" method="GET">

                Product ID:
                <input type="number" name="id" required>

                <button type="submit">Delete</button>

            </form>
        `);
    }

    // Delete product
    else if (url.pathname === '/delete') {
        const id = url.searchParams.get('id');

        const sql = 'DELETE FROM Product WHERE Id = ?';

        con.query(sql, [id], (err, result) => {
            if (err) {
                res.writeHead(500);
                res.end('Database Error');
                return;
            }

            res.writeHead(200, {
                'Content-Type': 'text/html',
            });

            res.end(`
                <h2>Product deleted successfully.</h2>

                <p>Deleted Product ID: ${id}</p>

                <a href="/">Go Back</a>
            `);
        });
    } else {
        res.writeHead(404);
        res.end('404 - Page Not Found');
    }
});

server.listen(3000, () => {
    console.log('Server running at http://localhost:3000');
});
