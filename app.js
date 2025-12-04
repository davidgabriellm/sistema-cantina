const express = require('express');
const bodyParser = require('body-parser');
const database = require('./src/database');

const { Pedido, ItemPedido, Cliente, Produto } = require('./src/models/Pedido');

const app = express();
const PORT = 3000;

app.set('view engine', 'ejs');
app.set('views', './src/views');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('Sistema de Cantina (teste)');
});

database.sync({ force: false })
    .then(() => {
        console.log('Banco de dados SQLite sincronizado');
        app.listen(PORT, () => {
            console.log(`Servidor rodando em http://localhost:${PORT}`);
        });
    })
    .catch(erro => {
        console.error('Erro ao conectar no banco:', erro);
    });