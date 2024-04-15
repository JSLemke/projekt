const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Handle OPTIONS request
  if (req.method === 'OPTIONS') {
    res.writeHead(200);
    res.end();
    return;
  }

  // Handle API routes
  if (req.url === '/hotels' && req.method === 'GET') {
    // Read hotel data from JSON file
    fs.readFile(path.join(__dirname, 'data', 'hotels.json'), 'utf8', (err, data) => {
      if (err) {
        res.writeHead(500);
        res.end(JSON.stringify({ error: 'Internal Server Error' }));
        return;
      }
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(data);
    });
  } else if (req.url === '/flights' && req.method === 'GET') {
    // Read flight data from JSON file
    fs.readFile(path.join(__dirname, 'data', 'flights.json'), 'utf8', (err, data) => {
      if (err) {
        res.writeHead(500);
        res.end(JSON.stringify({ error: 'Internal Server Error' }));
        return;
      }
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(data);
    });
  } else {
    // Handle unknown routes
    res.writeHead(404);
    res.end(JSON.stringify({ error: 'Not Found' }));
  }
});

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
