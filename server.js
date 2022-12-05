const express = require('express');
const config = require('./config.js');
const api = require('./api.js');
let app = express();
app.use(express.json());
app.listen(config.port, () => {
  console.log(`h5p content type development server running on port ${config.port}`);
});
app.get('/content/:library/:folder', api.content);
app.use(express.static('./'));
