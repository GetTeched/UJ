var http = require('http');

http.createServer(function(request, response){

  var data = '';
  request.addListener('data', function(chunk) { data += chunk; });
  request.addListener('end', function() {
            console.log(data);
            response.writeHead(200, {'content-type': 'text/plain' });
            response.end()
        });
  console.log(request.method);
  

}).listen(1337, '41.86.113.25');



/*
var http = require('http');
var qs = require('querystring');


http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  console.log(req.url);
 console.log(req.headers);
  console.log(req.trailers);
  console.log(req.httpVersion);
  console.log(req.connection);
  console.log(req.method);
 if (req.method == 'POST') {
        var body = '';
        req.on('data', function (data) {
            body += data;
        });
        req.on('end', function () {

            var POST = qs.parse(body);
            console.log(body);// use POST

        });
    }
  res.end('Hello World\n');
}).listen(1337, '41.86.113.25');
console.log('Server running at http://41.86.113.25:1337/'); 


function (request, response) {
    if (request.method == 'POST') {
        var body = '';
        request.on('data', function (data) {
            body += data;
        });
        request.on('end', function () {

            var POST = qs.parse(body);
            // use POST

        });
    }
}
*/
