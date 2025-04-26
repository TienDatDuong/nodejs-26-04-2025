// const express = require('express');
import  express  from "express";
const app = express();
const PORT = 8080;

app.get("/",function(req,res){
    res.send('hello1231')
})

app.listen(PORT, function () {
  console.log("my app");
});