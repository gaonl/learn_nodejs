/*
	var module.exports = {}
	var exports = module.exports
*/

exports.suffix = function(url){
	return url.substring(url.indexOf("."));
}
console.log(module);

/*
return module.exports;
*/

/*
	node对每个文件模块会默认存在上述两行代码
	var utils = require("utils.js")
	utils === module.exports
	
	exports = "abc" 只是对变量exports重新赋值，并不会修改module.exports
	所以require后的东西，还是原来的module.exports
	
	要这样才行：
	module.exports = "abc"
	
	
	
	
	Module {
	  id: '.',
	  path: 'C:\\gaonl\\projects\\nodejs',
	  exports: { suffix: [Function (anonymous)] },
	  parent: null,
	  filename: 'C:\\gaonl\\projects\\nodejs\\utils.js',
	  loaded: false,
	  children: [],
	  paths: [
		'C:\\gaonl\\projects\\nodejs\\node_modules',
		'C:\\gaonl\\projects\\node_modules',
		'C:\\gaonl\\node_modules',
		'C:\\node_modules'
	  ]
	}
*/
