const http = require('http');
const mysql = require('mysql2');

const con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'Node_test',
});

const server = http.createServer((req, res) => {
    if (req.url === '/products') {
        const sql = 'SELECT * FROM Product WHERE Quantity < 3';

        con.query(sql, (err, result) => {
            if (err) {
                res.writeHead(500);
                res.end('Database Error');
                return;
            }

            let html = `
                <h1>Products With Quantity Less Than 3</h1>

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
    console.log('Server running at http://localhost:3000/products');
});
