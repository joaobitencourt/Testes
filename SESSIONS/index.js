const express = require("express");
const cookies = require("cookie-parser");
const sessions = require("express-session");
const cookieParser = require("cookie-parser");
const app = express();
const port = 3000;
const oneDay = 1000 * 60 * 60 * 24;

/* Credencias de autentificação 
obs.: em um ambiente de produção essas informações serão tiradas do banco de dados
*/
const myusername = 'user1'
const mypassword = 'mypassword'
// a variable to save a session
var session;

//Configuração do midleware session
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname));
//configurando o analizador de cookies
app.use(cookieParser());
app.use(sessions({
    // o "secret" é uma string definida por nós para ser a chave de autentificação de sessão.    
    secret: "oiEusouOgokuaçaçaçaçaçaçmsçaksdPlanquitom", //sempre longa é aleatoria.
    saveUninitialized:true,
    /*duração do cookie, quando chega no tempo limite ele é apagado 
     */
    cookie: { maxAge: oneDay },
    /* //valor boleano que parmite guardar a sessão no armazenamento da sessão, de forma assincrona,
     ou seja, se houver duas reqiusições qunado a segunda chegar salvara por cima da primeira
     o valor defalut é true.
     */ 
    resave: false 
}));

/* rotas */

//requisição de dos dados do usuário e autentificação pelo servidor
app.post('/user',(req,res) => {
    if(req.body.username == myusername && req.body.password == mypassword){
        session=req.session;
        session.userid=req.body.username;
        console.log(req.session)
        //salvando o cookie e inicialisação de sessão 
        res.send(`Hey there, welcome <a href=\'/logout'>click to logout</a>`);
    }
    else{ // dados invalidos
        res.send('Invalid username or password');
    }
}); 

/* 
logout 
deletendo a sessão criada 
o cookie será deletado do navegador quando o tempo for expirado
*/
app.get('/logout',(req,res) => {
    req.session.destroy();
    res.redirect('/');
});

app.get('/',(req,res) => {
    session=req.session;
    if(session.userid){
        res.send("Welcome User <a href=\'/logout'>click to logout</a>");
    }else
    res.sendFile('views/index.html',{root:__dirname});
});


app.listen(port, () => console.log(`Server Running at port ${port}`));