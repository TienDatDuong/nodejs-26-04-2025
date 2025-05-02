// const express = require('express');
import  express  from "express";
import webRouter from "./routes/web"
require('dotenv').config();
const app = express();
const PORT = process.env.PORT;

//config view engine
app.set('view engine', 'ejs')
app.set('views', __dirname + '/views')

//config req.body
app.use(express.json());
app.use(express.urlencoded({extended: true}))

//config static file: image/css/js
app.use(express.static('public'));

//config router
webRouter(app)

app.listen(PORT, function () {
  console.log("my app",`${process.env.PORT}`);
});