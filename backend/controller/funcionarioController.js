const express = require('express');
const router = express.Router();
const funcionarioRepository = require('../repository/funcionarioRepository');

// GET - listar
router.get('/', async (req, res) => {
    try {
        const funcionarios = await funcionarioRepository.listar();
        res.json(funcionarios);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'erro ao obter funcionarios' });
    }
});

// POST - cadastrar
router.post('/', async (req, res) => {
    try {
        const { nome, cpf, funcao } = req.body;

        if (!nome || !cpf || !funcao) {
            return res.status(400).json({ error: 'Todos os campos são obrigatórios' });
        }

        const novoFuncionario = await funcionarioRepository.cadastrar({ nome, cpf, funcao });
        res.status(201).json(novoFuncionario);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'erro ao criar funcionario' });
    }
});

module.exports = router;