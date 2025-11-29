const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(express.static('public'));
app.use(bodyParser.json());

let capturedData = [];

app.get('/data', (req, res) => {
  res.json(capturedData);
});

app.post('/data', (req, res) => {
  const newData = req.body;
  capturedData.push(newData);
  res.status(201).json({ message: 'Data added' });
});

app.put('/data/:index', (req, res) => {
  const index = req.params.index;
  if (capturedData[index]) {
    capturedData[index] = req.body;
    res.json({ message: 'Data updated' });
  } else {
    res.status(404).json({ message: 'Index not found' });
  }
});

app.listen(port, () => {
  console.log(`App running at http://localhost:${port}`);
});
