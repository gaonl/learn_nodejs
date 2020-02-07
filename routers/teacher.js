const express = require('express')

var router = express.Router()

router
    .get('/teacher/',function(req,resp){
        resp.send("teacher index page")
    })
    .get('/teacher/add',function(req,resp){
        resp.send("teacher add page")
    })


module.exports = router