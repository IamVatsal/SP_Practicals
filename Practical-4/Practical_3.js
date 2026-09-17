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
        res.writeHead(200, { 'Content-Type': 'text/html' });

        res.end(`
            <h1>Add Product</h1>

            <form action="/add" method="GET">

                Name:
                <input type="text" name="name" required>
                <br><br>

                Brand:
                <input type="text" name="brand" required>
                <br><br>

                Quantity:
                <input type="number" name="quantity" required>
                <br><br>

                Price:
                <input type="number" name="price" required>
                <br><br>

                <button type="submit">Add Product</button>

            </form>
        `);
    }

    // Insert product
    else if (url.pathname === '/add') {
        const name = url.searchParams.get('name');
        const brand = url.searchParams.get('brand');
        const quantity = url.searchParams.get('quantity');
        const price = url.searchParams.get('price');

        const sql = `
            INSERT INTO Product (Name, Brand, Quantity, Price)
            VALUES (?, ?, ?, ?)
        `;

        con.query(sql, [name, brand, quantity, price], (err) => {
            if (err) {
                res.writeHead(500);
                res.end('Database Error');
                return;
            }

            res.writeHead(200, {
                'Content-Type': 'text/html',
            });

            res.end(`
                    <h2>Product added successfully!</h2>
                    <a href="/">Add another product</a>
                `);
        });
    }
});

server.listen(3000, () => {
    console.log('Server running at http://localhost:3000');
});
