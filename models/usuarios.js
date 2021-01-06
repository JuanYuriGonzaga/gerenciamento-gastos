const db = require('./conexaoBanco');

// Criando a tabela de usuários:
const Usuarios = db.sequelize.define('usuarios', {
	us_nome: {
		type: db.Sequelize.STRING,
		allowNull: false,
	},
	us_senha: {
		type: db.Sequelize.STRING,
		allowNull: false,
	},
	us_salario:{
		type: db.Sequelize.DECIMAL(10,2),
		allowNull: false,
	},
	us_vale_alimentacao: {
		type: db.Sequelize.DECIMAL(10,2),
		allowNull: false,
	},
	us_vale_transporte: {
		type: db.Sequelize.DECIMAL(10,2),
		allowNull: false,
	}
})

//Usuarios.sync({force: true});

module.exports = Usuarios;