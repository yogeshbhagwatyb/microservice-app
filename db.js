const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'appuser',
  password: 'yourpassword', // or your password
  database: 'shopping_hub'
});

connection.connect((err) => {
  if (err) {
    console.error('❌ MySQL connection error:', err);
    process.exit(1);
  }
  console.log('✅ Connected to MySQL');
});

module.exports = connection;
