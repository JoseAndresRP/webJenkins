var express = require('express');
var app = express();

app.get('/',function(req,res) {
  res.status(200).send("Hello World");
});

app.get('/galletas',function(req,res) {
  res.status(200).send("¡Te dare galletas!");
});

module.exports = app.listen(process.env.PORT || 4000, ()=>{
    console.log("Alive!")
});