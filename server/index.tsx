import { renderToString } from 'react-dom/server';
import express from 'express';
import React from 'react';
import path from 'path';
import fs from 'fs';

import Home from '../components/Home';

(async () => {

  const PORT = 3000;

  const app = express();
  app.get('/', (req, res) => {
    // res.send('Hello, SSR!');
    const indexFile = path.resolve('./public/index.html');
    const html = renderToString(<Home />);
    fs.readFile(indexFile, 'utf-8', (err, data) => {
      if (err) {
        console.error('Something went wrong:', err);
        return res.status(500).send('Oops, better luck next time!');
      }
      return res.send(data.replace('<div id="root"></div>', `<div id="root">${html}</div>`));
    })
  })

  app.use(express.static(path.resolve('./public')));
  
  app.listen(PORT, () => {
    console.log('🚀 Server starting on port 3000');
  });
})();
