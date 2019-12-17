/*
	A.核心模块加载：直接加载，因为核心模块代码已经编译内置到node平台中了
	B.自己编写的代码加载：用相对路径去加载，例如  var utils = require("./utils.js");
	C.第三方模块加载(需要通过npm进行安装)：
		比如： var template = require("art-template")
		1.现在此js文件的当前目录下，找 ./node_modules/art-template/package.json文件中的main属性
		2.main属性的值（比如index.js）就是要加载的文件（此时与B 加载自己编写的模块方式相同）
		3.可以理解成  var template = require("./node_modules/art-template/index.js")
*/

var http =  require("http");
var fs = require("fs");
var utils = require("./utils.js");

var mimeMap = {};

mimeMap[".txt"] = "text/plain;charset=utf-8";
mimeMap[".html"] = "text/html;charset=utf-8";
mimeMap[".htm"] = "text/html;charset=utf-8";
mimeMap[".css"] = "text/css;charset=utf-8";
mimeMap[".js"] = "text/javascript;charset=utf-8";

mimeMap[".bmp"] = "image/x-ms-bmp";
mimeMap[".jpg"] = "image/jpeg";
mimeMap[".jpeg"] = "image/jpeg";
mimeMap[".gif"] = "image/gif";
mimeMap[".png"] = "image/png";

//C:\gaonl\projects\nodejs
var rootDir = "file:///C:/gaonl/projects/nodejs/resources";

const server = http.createServer((req, resp) => {
});
server.on('request', (req,resp) => {
	var url = req.url;
    var filePath = rootDir + url;
	
	fs.readFile(new URL(filePath), (err, data) => {
		if (err) {
			resp.end("<p>404 not found</p>");
		} else{
			var mimeType = mimeMap[utils.suffix(url)];
			if(!mimeType){
				mimeType = "text/plain";
			}
			resp.writeHead(200, { 'Content-Type': mimeType });
			resp.end(data);
		}
	});
	
});

server.listen(8000);











