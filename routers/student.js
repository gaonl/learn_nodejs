const express = require('express')

var router = express.Router()

router
    .get('/student/',function(req,resp){
        resp.render("studentList.art",[
            {id:1,name:"gaonl",age:18},
            {id:2,name:"yms",age:16}
        ])
    })
    .get('/student/add',function(req,resp){
        resp.send("student add page")
    })


module.exports = router