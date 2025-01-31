import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContainerComponent } from '../../container/container.component';
import { CardProdutosComponent } from '../../card-produtos/card-produtos.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ContainerComponent, CardProdutosComponent, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  produtos = [
    { nome: 'Filé de Frango Peito Congelado sem Osso Sadia 1Kg', imagem: 'assets/teste.png', preco: 23.49 },
    { nome: 'Picanha Ouro Congelada Swift 1,1Kg', imagem: 'assets/picanha-ouro.png', preco: 104.39 },
    { nome: 'Linguiça Toscana Inteira Sadia 600g', imagem: 'assets/ling-toscana.png', preco: 18.47 },
    { nome: 'Pão de alho Santa Massa Tradicional 400g', imagem: 'assets/pao-de-alho.png', preco: 16.82 },
  ];
}
