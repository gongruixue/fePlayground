var express=require('express'),
    nunjucks=require('nunjucks');

var app=express();

nunjucks.configure('app/views',{
    autoescape:true,
    express:app
});
app.use(express.static('public'));

app.get('/',function(req,res){
    res.render('checkbox.html',{name:'qingcheng'});
});
app.get('/products',function(req,res){
    res.render('productTable.html');
});
app.get('/temp',function(req,res){
    res.render('temp.html');
});
app.get('/sc',function(req,res){
    res.render('securitycenter.html');
});
app.get('/transform',function(req,res){
    res.render('transform.html');
});

var server=app.listen(3000,function(){
    console.log('server listening at port',server.address().port);
});
