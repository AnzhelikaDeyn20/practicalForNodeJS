const http = require('http');
const fs = require('fs');
const path = require("path");
const extrModule = require("./extr");

const server = http.createServer(function(req, res){
	let url = req.url;
	filePath = extrModule(url);
	fileNameNew = "index.html"
	if(url.length > 1){
		fileNameNew = url.substring(1);
	}
	console.log(fileNameNew);
	var extWithoutDot;
	var ext;
	var ext = path.extname(fileNameNew);
	var extWithoutDot = ext.substring(1);
	if (extWithoutDot == 'pdf') {
				fileNameNew = "1.pdf";
	 }
	fs.readFile(filePath, function(err, data){
		if(err){
			console.log('ошибка');
			res.writeHead(404, {"Content-Type": "text/html"});
    		res.write("<img src='404.jpg'></img>");
    		res.end();
    		return;
		}
		else {
			console.log('всё норм');
			res.end(data);
		}
	});
});

server.listen(80);
