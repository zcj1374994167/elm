const express = require('express')
const app = new express
const cors = require('cors');
const data = require('../public/data.json')

app.use(cors());

app.get('/getdata',(req,res)=>{
    res.json({
        code:200,
        list:data
    })
})


app.listen(3333, '127.0.0.1')