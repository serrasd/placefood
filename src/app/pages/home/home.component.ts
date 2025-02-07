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

  scrollLeft(carouselId: string): void {
    const carousel = document.getElementById(carouselId);
    if (carousel) {
      carousel.scrollBy({ left: -350, behavior: 'smooth' });
    }
  }

  scrollRight(carouselId: string): void {
    const carousel = document.getElementById(carouselId);
    if (carousel) {
      carousel.scrollBy({ left: 350, behavior: 'smooth' });
    }
  }


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
      nome: 'Pão de Alho Santa Massa Tradicional',
      imagem: 'assets/pao-de-alho.png',
      preco: 16.82,
    },
    {
      nome: 'Coca Cola Sem Açúcar 2L',
      imagem: 'assets/coca-cola-zero-2l.png',
      preco: 9.79,
    },
    {
      nome: 'Batata Pré-Frita Sadia 1,05Kg',
      imagem: 'assets/batata-congelada-sadia.png',
      preco: 24.99,
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
    {
      nome: 'Suco de Laranja Natural One 1,5L',
      imagem: 'assets/suco-de-laranja.png',
      preco: 19.79,
    },
    {
      nome: 'Suco Del Valle Uva 1L',
      imagem: 'assets/del-valle-uva.png',
      preco: 7.99,
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
    {
      nome: 'Laranja Bahia Importada 1Kg',
      imagem: 'assets/laranja-bahia-importada.png',
      preco: 15.29,
    },
    {
      nome: 'Uva Escura sem Semente 500g',
      imagem: 'assets/uva.png',
      preco: 7.99,
    },
  ];
}
