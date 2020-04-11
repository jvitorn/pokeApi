//definindo porta do servidor
const port = 3000;
//criando express
const express = require('express'); 
//criando app 
const app = express();
//criando path
const path = require('path');
//definindo onde estara as views
app.set('views',path.join(__dirname,'src'));
//renderizando para html
app.engine('html',require('ejs').renderFile);
app.use('/estatico',express.static('src'));
//encode
app.use(express.urlencoded());
app.use(express.json())

//routes
app.get('/',(req,res)=>{
    res.render('index.html');
})
app.get('/pokedex',(req,res)=>{
    res.render('national.html');
})
app.get('/pokemon',(req,res)=>{
    res.render('pokemon.html');
})
//Servidor 
app.listen(port,function(){
    console.log('Server is running at http://localhost:'+ port);
});