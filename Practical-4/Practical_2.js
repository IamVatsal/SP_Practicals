const mysql = require('mysql2');

const con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'Node_test',
});

con.connect((err) => {
    if (err) throw err;

    console.log('Connected to Node_test database!');

    const sql = `
        CREATE TABLE IF NOT EXISTS Product (
            Id INT AUTO_INCREMENT PRIMARY KEY,
            Name VARCHAR(100),
            Brand VARCHAR(100),
            Quantity INT,
            Price DECIMAL(10,2)
        )
    `;

    con.query(sql, (err) => {
        if (err) throw err;

        console.log('Product table created successfully.');
        con.end();
    });
});
