// Início configurações:

const express = require('express');
const app = express();
const handlebars = require('express-handlebars');

// Config body-parser.
// Receita de bolo.
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// Faz a configuração do template engine para o Handlebars.
// Receita de bolo.
app.engine('handlebars', handlebars({
	defaultLayout: 'main',
	runtimeOptions: {
	    allowProtoPropertiesByDefault: true,
	    allowProtoMethodsByDefault: true,
    },
}));
app.set('view engine', 'handlebars');

const Usuarios = require('./models/usuarios');
const Divida_usuario = require('./models/dividas_usuario');

// Final configurações.

// Diz que a pasta assets está pública e estáticam
// Logo os arquivos delas podem ser acessados por link href.
app.use(express.static(__dirname + '/assets'));

app.get("/", function(req, res){
	res.sendFile(__dirname + "/html/index.html");
});

app.post("/formularioLogin", function(req, res){
	res.send("Teste do envio de informações do formulário: " + req.body.nome_usuario);
});

app.get("/inicioCadastro", function(req, res){
	res.sendFile(__dirname + "/html/cadastro.html");
});

// Diz para o servidor iniciar e utilizar a porta padrão ou então a porta 3000.
app.listen(process.env.port || 8080, (req, res) => {
	console.log("Positivo e operante!");
});