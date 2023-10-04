const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

// Database Connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'mydata'
});

// Check if the database connection is successful
db.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:', err);
  } else {
    console.log('Connected to the database');
  }
});

app.post('/login', (req, res) => {
  const { email, password } = req.body; // Destructure email and password from the request body
  const sql = "SELECT * FROM login WHERE username = ? AND password = ?";
  db.query(sql, [email, password], (err, data) => {
    if (err) {
      console.error('Database error:', err);
      return res.status(500).json({ error: 'Database error' }); // Handle database error
    }
    if (data.length > 0) {
      return res.json({ message: 'Login successful' });
    } else {
      return res.json({ message: 'No records found' });
    }
  });
});

app.listen(8081, () => {
  console.log('Listening on port 8081...');
});
