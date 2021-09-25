var express = require('express');
var app = express();

app.get('/',function(req,res) {
  res.send("Hello World");
});

module.exports = app.listen(process.env.PORT || 4000, ()=>{
    console.log("Alive!")
});