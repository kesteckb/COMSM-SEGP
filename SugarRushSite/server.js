// Get dependencies
const db = require('./db')
const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');

// Get our API routes
const api = require('./server/routes/api');
const hobbits = require('./server/routes/hobbits');
const houses = require('./server/routes/houses');
const fooditems = require('./server/routes/fooditems')

const app = express();

// Parsers for POST data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// Point static path to dist (folder where build files are located)
app.use(express.static(path.join(__dirname, 'dist/sugarRush')));

// Set our api routes
app.use('/api', api);
app.use('/hobbits', hobbits);
app.use('/houses', houses);
app.use('/fooditems', fooditems);

// Catch all other routes and return the index file
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/sugarRush/index.html'));
});

/**
 * Get port from environment and store in Express.
 */
const port = process.env.PORT || '3000';
app.set('port', port);

/**
 * Create HTTP server.
 */
const server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */
server.listen(port, () => console.log(`API running on localhost:${port}`));
