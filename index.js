// Criando constantes do Express.
const express = require("express");
const app = express();
const path = require("path");
const router = express.Router();

// Diz que a pasta assets está pública e estáticam
// Logo os arquivos delas podem ser acessados por link href.
app.use(express.static(__dirname + '/assets'));

// Caso o usuário esteja na rota padrão, na rota barra.
// Será renderizado o arquivo index.html.
router.get("/", function(req, res){
	res.sendFile(path.join(__dirname + '/html/index.html'));
});

// Diz para a aplicação utilizar o '/' como uma rota válida.
app.use('/', router);

// Diz para o servidor iniciar e utilizar a porta padrão ou então a porta 3000.
app.listen(process.env.port || 8080, (req, res) => {
	console.log("Positivo e operante!");
});