import { Component } from '@angular/core';
import { ContainerComponent } from '../../container/container.component';
import { CardProdutosComponent } from '../../card-produtos/card-produtos.component';

@Component({
  selector: 'app-home',
  imports: [ContainerComponent, CardProdutosComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  produtos = [
    { nome: 'Produto 1', imagem: 'assets/produto1.jpg' },
    { nome: 'Produto 2', imagem: 'assets/produto2.jpg' },
    { nome: 'Produto 3', imagem: 'assets/produto3.jpg' },
  ];
}
