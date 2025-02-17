import express from 'express';
import fs from 'fs';
import cors from 'cors';
import path from 'path';
import { Produto } from './src/app/interface/produto.model';

const app = express();
const porta = 3000;
const produtosJson = path.join(__dirname, '/src/assets/produtos.json');

app.use(cors());
app.use(express.json({ limit: '10mb' }));
app.use(
  express.urlencoded({ limit: '10mb', extended: true, parameterLimit: 50000 })
);

app.get('/produtos', (req, res) => {
  fs.readFile(produtosJson, (err, data) => {
    if (err) {
      return res.status(500).json({ message: 'Erro ao ler arquivo json' });
    }

    try {
      const produtos = JSON.parse(data.toString());
      return res.json(produtos);
    } catch (error) {
      return res.status(500).json({ message: 'Erro ao interpretar json' });
    }
  });
});

app.post('/adicionar-produto', (req, res) => {
  fs.readFile(produtosJson, (err, data) => {
    if (err) {
      res.status(500).json({ message: 'Erro ao ler arquivo json' });
    }

    let produtosJsonData;

    try {
      produtosJsonData = JSON.parse(data.toString());
    } catch (error) {
      res.status(500).json({ message: 'Erro ao interpretar json' });
    }

    const { categoria, novoProduto } = req.body;


    if (!produtosJsonData[categoria]) {
      res.status(400).json({ message: 'Categoria inválida' });
    }

    produtosJsonData[categoria].push(novoProduto);

    fs.writeFile(produtosJson, JSON.stringify(produtosJsonData, null, 2), (writeErr) => {
      if (writeErr) {
        return res.status(500).json({ message: 'Erro ao salvar o produto' });
      }
      return res.status(200).json({ message: 'Produto adicionado com sucesso.' });
    });
  });
});

app.delete('/deletar-produto/:id', (req, res) => {
  fs.readFile(produtosJson, 'utf8', (err, data) => {
    if (err) {
      res.status(500).json({ message: 'Erro ao ler arquivo JSON' });
    }

    let produtosJsonData;

    try {
      produtosJsonData = JSON.parse(data);
    } catch (error) {
      res.status(500).json({ message: 'Erro ao interpretar JSON' });
    }

    const { id } = req.params;

    let produtoEncontrado = false;

    for (const categoria in produtosJsonData) {
      const index = produtosJsonData[categoria].findIndex((produto: Produto) => produto.id === id);
      if (index !== -1) {
        produtosJsonData[categoria].splice(index, 1);
        produtoEncontrado = true;
        break;
      }
    }

    if (!produtoEncontrado) {
      res.status(404).json({ message: 'Produto não encontrado' });
    }

    fs.writeFile(produtosJson, JSON.stringify(produtosJsonData, null, 2), 'utf8', (writeErr) => {
      if (writeErr) {
        res.status(500).json({ message: 'Erro ao salvar o arquivo JSON' });
      }
      res.status(200).json({ message: 'Produto deletado com sucesso.' });
    });
  });
});


app.listen(porta, async () => {
  console.log(`Server rodando em http://192.168.208.62:${porta}`);
});
