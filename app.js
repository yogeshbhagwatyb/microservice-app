// const express = require('express');
// const app = express();
// const port = 3000;

// app.get('/', (req, res) => {
//   res.send('Hello from Jenkins CI/CD pipeline on EC2!');
// });

// app.listen(port, () => {
//   console.log(`App listening at http://localhost:${port}`);
// });

// const express = require('express');
// const path = require('path');
// const app = express();
// const port = 3000;

// // Serve static files (like CSS, JS, images if needed later)
// app.use(express.static(__dirname));

// // Route to serve index.html
// app.get('/', (req, res) => {
//   res.sendFile(path.join(__dirname, 'index.html'));
// });

// app.listen(port, () => {
//   console.log(`App running at http://localhost:${port}`);
// });



const express = require('express');
const path = require('path');
const db = require('./db'); // MySQL connection

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.static(__dirname)); // Serve static files from current folder

// Serve index.html on root
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Signup route
app.post('/signup', (req, res) => {
  const { username, password } = req.body;
  const query = 'INSERT INTO users (username, password) VALUES (?, ?)';
  db.query(query, [username, password], (err, result) => {
    if (err) {
      if (err.code === 'ER_DUP_ENTRY') {
        return res.status(400).json({ message: 'User already exists!' });
      }
      return res.status(500).json({ message: 'Database error' });
    }
    res.json({ message: 'Signup successful!' });
  });
});

// Login route
app.post('/login', (req, res) => {
  const { username, password } = req.body;
  const query = 'SELECT * FROM users WHERE username = ? AND password = ?';
  db.query(query, [username, password], (err, result) => {
    if (err) return res.status(500).json({ message: 'Database error' });

    if (result.length > 0) {
      res.json({ message: `Welcome back, ${username}!` });
    } else {
      res.status(401).json({ message: 'Invalid credentials' });
    }
  });
});

app.listen(port, () => {
  console.log(`✅ App running at http://localhost:${port}`);
});
