const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = 3000;

// Serve static files (HTML)
app.use(express.static(__dirname));
app.use(bodyParser.json());

// Connect to MySQL
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'admin', // Add your MySQL root password here if set
    database: 'OLDS'
});

db.connect((err) => {
    if (err) throw err;
    console.log('Connected to MySQL');
});

// Handle form submission
app.post('/register', (req, res) => {
    const { name, email, phone_number, payment_method, amount_to_pay } = req.body;

    const sql = 'INSERT INTO Lucky_Draw_Members (name, email, phone_number, payment_method, amount_to_pay) VALUES (?, ?, ?, ?, ?)';
    db.query(sql, [name, email, phone_number, payment_method, amount_to_pay], (err) => {
        if (err) {
            console.error(err);
            return res.status(500).send('Error saving to database.');
        }
        res.send('Registration successful!');
    });
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
