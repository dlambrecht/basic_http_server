const http = require('http');
// const fs = require('fs');

var server = http.createServer((req, res) => {
  if(req.method === 'GET' && req.url === '/time') {
    res.writeHead(200, {'Content-Type': 'application/json'});
    res.write(JSON.stringify({msg: 'it is: ' + new Date()}));
    return res.end();
  }

  if(req.method === 'GET' && req.url === '/greet/name') {
    res.writeHead(200, {'Content-Type': 'application/json'});
    res.write(JSON.stringify({msg: 'Hello Trillie'}));
    return res.end();
  }

  res.writeHead(404, {'Content-Type': 'application/json'});
  res.write(JSON.stringify({msg: 'page not found'}));
  return res.end();
});

  // if(req.method === 'GET' && (req.url === '/' || req.url === '/index.html')) {
  //   var index = fs.createReadStream(__dirname + '/public/index.html');
  //   return index.pipe(res);
  // }

server.listen(3000, () => console.log('server up'));//eslint-disable-line
