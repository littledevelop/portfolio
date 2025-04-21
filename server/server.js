const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const contactAPI = require('./ContactAPI');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

app.use('/api', contactAPI); // <-- API route prefix

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
