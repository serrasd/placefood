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
      return res.status(500).json({ message: 'Erro ao ler arquivo json' });
    }

    let produtosJsonData;

    try {
      produtosJsonData = JSON.parse(data.toString());
    } catch (error) {
      return res.status(500).json({ message: 'Erro ao interpretar json' });
    }

    const { categoria, novoProduto } = req.body;


    if (!produtosJsonData[categoria]) {
      return res.status(400).json({ message: 'Categoria inválida' });
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
      return res.status(500).json({ message: 'Erro ao ler arquivo json' });
    }

    let produtosJsonData;

    try {
      produtosJsonData = JSON.parse(data);
    } catch (error) {
      return res.status(500).json({ message: 'Erro ao interpretar json' });
    }

    const { categoria, id } = req.body;

    if (!produtosJsonData[categoria]) {
      return res.status(400).json({ message: 'Categoria inválida' });
    }

    const index = produtosJsonData[categoria].findIndex((produto: Produto) => produto.id === id);

    if (index === -1) {
      return res.status(404).json({ message: 'Produto não encontrado' });
    }

    produtosJsonData[categoria].splice(index, 1);

    fs.writeFile(produtosJson, JSON.stringify(produtosJsonData, null, 2), 'utf8', (writeErr) => {
      if (writeErr) {
        return res.status(500).json({ message: 'Erro ao salvar o arquivo json' });
      }
      return res.status(200).json({ message: 'Produto deletado com sucesso.' });
    });
  });
});

app.delete

app.listen(porta, async () => {
  console.log(`Server rodando em http://localhost:${porta}`);
});
