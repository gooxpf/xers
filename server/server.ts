import express from 'express';
import fs from 'fs';
import path from 'path';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import App from '../client/src/App';

const server = express();

server.set('view engine', 'ejs');
server.set('views', path.join(__dirname, 'views'));

server.use('/', express.static(path.join(__dirname, 'static')));

const manifest = fs.readFileSync(
  path.join(__dirname, 'static/manifest.json'),
  'utf-8',
);
const assets = JSON.parse(manifest);

server.get('/', (req, res) => {
  const component = ReactDOMServer.renderToString(React.createElement(App));
  res.render('client', { assets, component });
});

server.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Server running on http://localhost:3000');
});
