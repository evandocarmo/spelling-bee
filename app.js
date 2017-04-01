var express = require("express");
var app     = express();
var path    = require("path");

app.use('/public', express.static(path.join(__dirname, 'public')));

app.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/views/index.html'));
  //__dirname : It will resolve to your project folder.
});

app.get('/gameJunior',function(req,res){
  res.sendFile(path.join(__dirname+'/views/gameJunior.html'));
});

app.get('/gameBasic',function(req,res){
  res.sendFile(path.join(__dirname+'/views/gameBasic.html'));
});

app.get('/list',function(req,res){
  res.sendFile(path.join(__dirname+'/views/list.html'));
});

app.listen(process.env.PORT, process.env.IP);