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
            <h1>Update Product Price</h1>

            <form action="/update" method="GET">

                Product ID:
                <input type="number" name="id" required>
                <br><br>

                New Price:
                <input type="number" name="price" required>
                <br><br>

                <button type="submit">Update Price</button>

            </form>
        `);
    }

    // Update price
    else if (url.pathname === '/update') {
        const id = url.searchParams.get('id');
        const price = url.searchParams.get('price');

        const sql = `
            UPDATE Product
            SET Price = ?
            WHERE Id = ?
        `;

        con.query(sql, [price, id], (err, result) => {
            if (err) {
                res.writeHead(500);
                res.end('Database Error');
                return;
            }

            res.writeHead(200, {
                'Content-Type': 'text/html',
            });

            res.end(`
                <h2>Product price updated successfully.</h2>
                <p>Product ID: ${id}</p>
                <p>New Price: ${price}</p>

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
