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

// Serve static files (if needed in future)
app.use(express.static(__dirname));

// Route to serve index.html
app.get('/', (req, res) => {
<<<<<<< HEAD
  res.sendFile(path.join(__dirname, 'index.html'));
=======
  res.send('Hello Vishakha!!!!!!!!!! How are you?');
>>>>>>> 3fe6fd8ac303693e1a3a7a445ea423f452ce5e92
});

app.listen(port, () => {
  console.log(`App running at http://localhost:${port}`);
});
