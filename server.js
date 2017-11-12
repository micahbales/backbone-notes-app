const express = require('express');
const app = express();
const serveStatic = require('serve-static');

/* For production, serve static files from root */
app.use(serveStatic(__dirname));

app.listen(8000, () => {
  console.log('Express Server Listening on Port 8000');
});
