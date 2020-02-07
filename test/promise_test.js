var fs = require("fs")


var p1 = new Promise(function(succFun,errFun){
	fs.readFile("aaa.txt",function(err,data){
		if(err){
			errFun(err)
			return
		}
		succFun(data.toString())
	})
})


var p2 = new Promise(function(succFun,errFun){
	fs.readFile("bbb.txt",function(err,data){
		if(err){
			errFun(err)
			return
		}
		succFun(data.toString())
	})
})



//不管怎样，then中如果有返回值，返回的都是Promise
var step1 = p1
	.then(function(data){
		console.log("---->[p1 success]"+data)
		//return 的是一个Promise
		return p2
	},function(data){
		console.log("---->[p1 fail]"+data)
		//return 的是一个数据，但是会包装成一个Promise
		//这个Promise的执行状态永远都是成功的，即会调用成功的回调函数
		//函数的参数就是返回的data
		return data
	})
console.log(step1)
var step2 = step1
	.then(function(data){
		console.log("---->[p2 success]"+data)
		//虽然没有返回数据，但是下一次.then的时候，也会返回一个Promise,只是这个Promise的毁掉函数的数据是undefined
	},function(data){
		console.log("---->[p2 fail]"+data)
	})
	
step2.then(function(data){
	console.log("---->[final success]"+data) //undefined, 因为上一个.then并没有返回数据
},function(data){
	console.log("---->[final success]"+data)
})

console.log(step2)

