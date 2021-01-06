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
	res.render("index");
});

app.post("/formularioLogin", function(req, res){

	let nome_usuario = req.body.nome_usuario;
	let senha_usuario = req.body.senha_usuario;
	
	Usuarios.findAll({where: {'us_nome': nome_usuario, 'us_senha': senha_usuario}}).then(function(dados){
		if (dados != "")
		{
			res.render("inicioAplicacao");
		}
		else
		{
			res.render("/");
		}
	}).catch(function(){
		res.send("Deu problema rapaziada!");
	});
});

app.post("/formularioCadastro", function(req, res){

	let nome_usuario = req.body.nome_usuario;
	let senha_usuario = req.body.senha_usuario;
	let salario_usuario = req.body.salario_usuario;
	let alimentacao_usuario = req.body.alimentacao_usuario;
	let transporte_usuario = req.body.transporte_usuario;

	Usuarios.create({
		us_nome: nome_usuario,
		us_senha: senha_usuario,
		us_salario: salario_usuario,
		us_vale_alimentacao: alimentacao_usuario,
		us_vale_transporte: transporte_usuario
	}).then(function(retorno){
		res.render("sucessoCadastro");
	}).catch(function(erro){
		res.render("falhaCadastro");
	});
});

app.get("/inicioCadastro", function(req, res){
	res.render("cadastro");
});

// Diz para o servidor iniciar e utilizar a porta padrão ou então a porta 3000.
app.listen(process.env.port || 8080, (req, res) => {
	console.log("Positivo e operante!");
});