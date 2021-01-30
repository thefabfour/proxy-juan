const express = require('express');
const compression = require('compression');
const path = require('path');

const router = require('./router');

const PUBLIC_DIR = path.resolve(__dirname, '..', 'public');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(compression());
app.use(express.static(PUBLIC_DIR));

app.use('/bundles', router.bundles);
app.use('/api', router.api);

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Listening on Port: ${PORT}`);
});
