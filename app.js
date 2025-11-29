const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const port = process.env.PORT || 3000;

app.use(express.static('public'));
app.use(bodyParser.json());
"scripts": {
  "start": "node app.js"
}

// keep the rest of your routes here

app.listen(port, () => {
  console.log(`App running on port ${port}`);
});
