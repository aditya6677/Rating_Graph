var express=require('express');
var app = express();
app.use(express.static(__dirname + '/views'));
app.use(express.urlencoded());
app.get('/',function(req,res){
  res.sendFile('index.html');
});
app.listen(7676);
