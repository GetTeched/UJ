/*var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  console.log('User hit us up');
  res.end('Hello World\n');
}).listen(1337, '41.86.113.25');
console.log('Server running at http://127.0.0.1:1337/'); 
*/

var dns = require('dns');

dns.resolve4('www.mweb.co.za', function (err, addresses) {
  if (err) throw err;

  console.log('addresses: ' + JSON.stringify(addresses));

  addresses.forEach(function (a) {
    dns.reverse(a, function (err, domains) {
      if (err) {
        console.log('reverse for ' + a + ' failed: ' +
          err.message);
      } else {
        console.log('reverse for ' + a + ': ' +
          JSON.stringify(domains));
      }
    });
  });
});
