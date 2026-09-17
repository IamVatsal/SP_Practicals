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

    if (url.pathname === '/') {
        res.writeHead(200, {
            'Content-Type': 'text/html',
        });

        res.end(`
            <h1>Search Product</h1>

            <form action="/search" method="GET">

                Enter Name or Brand:
                <input type="text" name="value" required>

                <button type="submit">Search</button>

            </form>
        `);
    } else if (url.pathname === '/search') {
        const value = url.searchParams.get('value');

        const sql = `
            SELECT * FROM Product
            WHERE Name LIKE ? OR Brand LIKE ?
        `;

        const searchValue = `%${value}%`;

        con.query(sql, [searchValue, searchValue], (err, result) => {
            if (err) {
                res.writeHead(500);
                res.end('Database Error');
                return;
            }

            let html = `
                    <h1>Search Results</h1>

                    <table border="1" cellpadding="10">
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Brand</th>
                            <th>Quantity</th>
                            <th>Price</th>
                        </tr>
                `;

            result.forEach((product) => {
                html += `
                        <tr>
                            <td>${product.Id}</td>
                            <td>${product.Name}</td>
                            <td>${product.Brand}</td>
                            <td>${product.Quantity}</td>
                            <td>${product.Price}</td>
                        </tr>
                    `;
            });

            html += '</table>';

            res.writeHead(200, {
                'Content-Type': 'text/html',
            });

            res.end(html);
        });
    } else {
        res.writeHead(404);
        res.end('404 - Page Not Found');
    }
});

server.listen(3000, () => {
    console.log('Server running at http://localhost:3000');
});
