const db = require('./conexaoBanco');

// Criando a tabela de usuários:
const Dividas_usuario = db.sequelize.define('dividas_usuario', {
	du_nome: {
		type: db.Sequelize.STRING,
		allowNull: false,
	},
	du_valor: {
		type: db.Sequelize.DECIMAL(10,2),
		allowNull: false,
	},
	du_quantidade_parcela:{
		type: db.Sequelize.INTEGER,
		allowNull: false,
	},
	du_data_vencimento: {
		type: db.Sequelize.DATE,
		allowNull: false,
	},
	usuario_id: {
		type: db.Sequelize.INTEGER,
		references: {
			model: 'usuarios',
			key: 'id'
		},
		allowNull: false,
	}
})

//Dividas_usuario.sync({force: true});

module.exports = Dividas_usuario;