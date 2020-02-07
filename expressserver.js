const express = require('express')
const bodyParser = require('body-parser')
const studentRouter = require('./routers/student.js')
const teacherRouter = require('./routers/teacher.js')

const server = express()

/* body-parser */
// parse application/x-www-form-urlencoded
server.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
server.use(bodyParser.json())

//art-template  依赖  art-template模块 
//const template = require("art-template")
server.engine('art', require('express-art-template'))
server.set("views", path.join(__dirname, "./views/"))//默认就是views，这里明确写上

//static file 
server.use('/resources/',express.static('./resources'))


//挂载路由要在所有的配置之后
//routers
server.use(studentRouter)
server.use(teacherRouter)

//start listen server
server.listen(3000, () => console.log('Example app listening on port 3000!'))