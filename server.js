const compression = require('compression');
const express = require('express');
const path = require('path');
const helmet = require('helmet');
const cors = require('cors');
const enforce = require('express-sslify');
const { expressCspHeader, SELF, NONE } = require('express-csp-header');

const app = express();

if (process.env.NODE_ENV === 'production') {
  app.use(enforce.HTTPS({ trustProtoHeader: true }));
  app.use(expressCspHeader({
    directives: {
      'default-src': [NONE],
      'connect-src': [SELF, 'https://www.barnga-api.herokuapp.com.net'],
      'script-src': [SELF],
      'style-src': [SELF],
      'font-src': [SELF],
      'img-src': [SELF],
    },
  }));
}

app.use(cors());
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
