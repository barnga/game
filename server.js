const compression = require('compression');
const express = require('express');
const path = require('path');
const helmet = require('helmet');

const app = express();

app.use(compression());
app.use(helmet());
app.disable('x-powered-by');
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'build')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build/index.html'));
});

app.listen(process.env.PORT || 7000, () => {
  console.log(`Listening on ${process.env.PORT || 7000}`);
});
