import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardProdutosComponent } from '../../components/card-produtos/card-produtos.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CardProdutosComponent, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  produtos = [
    {
      nome: 'Filé de Frango Peito Sadia 1Kg',
      imagem: 'assets/file-de-frango.png',
      preco: 23.49,
    },
    {
      nome: 'Picanha Ouro Congelada Swift 1,1Kg',
      imagem: 'assets/picanha-ouro.png',
      preco: 104.39,
    },
    {
      nome: 'Linguiça Toscana Inteira Sadia 600g',
      imagem: 'assets/ling-toscana.png',
      preco: 18.47,
    },
    {
      nome: 'Pão de alho Santa Massa Tradicional',
      imagem: 'assets/pao-de-alho.png',
      preco: 16.82,
    },
  ];
  destaques = [
    {
      nome: 'Cerveja Heineken Lata 269ml',
      imagem: 'assets/cerveja-heineken-lata.png',
      preco: 3.99,
    },
    {
      nome: 'Suco Kapo Morango 200ml',
      imagem: 'assets/suco-del-valle-kapo.png',
      preco: 2.59,
    },
    {
      nome: 'Café em Pó 3 Corações Tradicional',
      imagem: 'assets/cafe-em-po-3-coracoes-tradicional.png',
      preco: 28.99,
    },
    {
      nome: 'Leite Integral UHT Italac 1 Litro',
      imagem: 'assets/leite-integral-italac.png',
      preco: 4.99,
    },
  ];
  hortifruti = [
    { nome: 'Maçã Gala Aprox 600g', imagem: 'assets/maca.png', preco: 8.63 },
    {
      nome: 'Alface Crespa Higienizada Pacote 150g',
      imagem: 'assets/alface.png',
      preco: 6.99,
    },
    {
      nome: 'Melancia Sugar Baby Aprox 4kg',
      imagem: 'assets/melancia.png',
      preco: 21.56,
    },
    {
      nome: 'Limão Orgânico 500g',
      imagem: 'assets/limao-organico.png',
      preco: 6.79,
    },
  ];
}
