const https = require('https');
const fs = require('fs');
const os = require('os');
const cluster = require('cluster');

const numCPUs = os.cpus().length;

function handleClientError(socket, error) {
  console.error('Client error:', error);
  socket.destroy();
}
function handleHTTPRequest(req, res) {
  const path = req.url;
  const userAgent = req.headers['user-agent'];
  const clientIP = req.connection.remoteAddress;
  console.log(`[REQUEST] ${clientIP} - ${path}`);
 if (path === '/' && req.method === 'GET') {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello, World!');
  }
}

const args = process.argv.slice(2);
  if (cluster.isMaster) {
    for (let i = 0; i < numCPUs; i++) {
      cluster.fork();
    }
  } else {
    const options = {
      key: fs.readFileSync('./cert/key.pem'),
      cert: fs.readFileSync('./cert/cert.pem')
    };
    https.createServer(options, (req, res) => {
      handleHTTPRequest(req, res);
    }).on('clientError', (error, socket) => {
    socket.destroy();
    handleClientError(socket, error);
  }).on('error', (error) => {
  }).on('timeout', (socket) => {
    socket.destroy();
  }).listen(443);
}

process.on('uncaughtException', (_err) => { });
process.on('unhandledRejection', (_err) => { });
require('events').EventEmitter.defaultMaxListeners = Infinity;
