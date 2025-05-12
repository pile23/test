const http = require('node:http');
const fs = require('node:fs');

http
		.createServer((request, response) => {
				const { headers, method, url } = request;
				response.statusCode = 200;
				response.setHeader('Content-Type', 'text/html');
				fs.readFile('index.html', (err, data)=>{
						console.log(request.socket.remoteAddress);
						response.end(data);
				});

				
		})
		.listen(8080);
