// const express = require('express');
// const app = express();
// const port = 3000;

// app.get('/', (req, res) => {
//   res.send('Hello from Jenkins CI/CD pipeline on EC2!');
// });

// app.listen(port, () => {
//   console.log(`App listening at http://localhost:${port}`);
// });

const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Serve static files (like CSS, JS, images if needed later)
app.use(express.static(__dirname));

// Route to serve index.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(port, () => {
  console.log(`App running at http://localhost:${port}`);
});
