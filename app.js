const express = require('express');
const app = express();

var indexRouter = require('./routes/index')

app.set('view engine', 'ejs');
app.use('/', indexRouter);

//routes for easy acces to resources
app.use('/css', express.static(__dirname + '/public/css'));
app.use('/images', express.static(__dirname + '/public/images'));
app.use('/js', express.static(__dirname + '/public/js'));

//localhost port
app.listen(3000, () =>{
    console.log("Servidor inicializado en el puerto 3000")
});