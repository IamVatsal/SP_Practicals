const http = require("http");
const mysql = require("mysql2");

const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "Node_test"
});

const server = http.createServer((req, res) => {

    if (req.url === "/products") {

        const sql = "SELECT * FROM Product";

        con.query(sql, (err, result) => {

            if (err) {
                res.writeHead(500);
                res.end("Database Error");
                return;
            }

            let html = `
                <html>
                <head>
                    <title>Products</title>
                    <style>
                        table {
                            border-collapse: collapse;
                            width: 70%;
                        }

                        th, td {
                            border: 1px solid black;
                            padding: 10px;
                            text-align: center;
                        }

                        th {
                            background-color: lightgray;
                        }
                    </style>
                </head>

                <body>

                <h1>Product Details</h1>

                <table>
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

            html += `
                </table>
                </body>
                </html>
            `;

            res.writeHead(200, {
                "Content-Type": "text/html"
            });

            res.end(html);
        });
    }

    else {
        res.writeHead(404);
        res.end("404 - Page Not Found");
    }
});

server.listen(3000, () => {
    console.log("Server running at http://localhost:3000/products");
});