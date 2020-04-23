//REQUISIÇÕES
const Sequelize = require('sequelize');

//CONEXÃO
const sequelize = new Sequelize('getpet', 'root', '1123Bd?', {
    host: 'localhost',
    dialect: 'mysql'
});

//MENSAGEM DE AUTENTICAÇÃO
sequelize.authenticate().then(function(){
    console.log("Conectado com sucesso :)");
}).catch(function(erro){
    console.log("Erro ao conectar com o BD: " + erro);
});

module.exports = sequelize;
