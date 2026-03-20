require('dotenv').config();

const express = require('express');
const cors = require('cors');
const sequelize = require('./server/db');

const funcionarioController = require('./controller/funcionarioController');

const app = express();
const PORT = process.env.PORT || 3071;

app.use(cors());
app.use(express.json());

app.use('/funcionarios', funcionarioController);

async function startServer() {
    try {
        await sequelize.authenticate();
        console.log('Conectado ao banco de dados com sucesso!');

        await sequelize.sync();
        console.log('Tabelas sincronizadas!');

        app.listen(PORT, () => {
            console.log(`Servidor rodando na porta ${PORT}`);
        });
    } catch (error) {
        console.error('Erro ao iniciar o servidor:', error);
    }
}

startServer();