const path = require("path");
let extr = function(url) {
	let fileName = "index.html";
	if(url.length > 1){
		fileName = url.substring(1);
	}

	var extWithoutDot;
	var ext;
	var ext = path.extname(fileName);
	var extWithoutDot = ext.substring(1);
	console.log(fileName);
	if (extWithoutDot == 'pdf') {
		fileName = "1.pdf";
	}
	filePath = path.resolve(__dirname, "app", fileName);
	return filePath;
}

module.exports = extr;