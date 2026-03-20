const Funcionario = require('../model/funcionario');

// listar todos
const listar = async () => {
    return await Funcionario.findAll();
};

// buscar por id
const buscarPorId = async (id) => {
    return await Funcionario.findByPk(id);
};

// cadastrar
const cadastrar = async (dadosFuncionario) => {
    return await Funcionario.create(dadosFuncionario);
};

module.exports = {
    listar,
    buscarPorId,
    cadastrar
};