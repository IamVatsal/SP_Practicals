const mysql = require('mysql2');

// Connect to MySQL
const con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
});

con.connect((err) => {
    if (err) throw err;

    console.log('Connected to MySQL!');

    // Create database
    con.query('CREATE DATABASE IF NOT EXISTS Node_test', (err) => {
        if (err) throw err;

        console.log("Database 'Node_test' created successfully.");
        con.end();
    });
});
