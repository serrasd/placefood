import { Component } from '@angular/core';
import { ContainerComponent } from "../../container/container.component";
import { CardProdutosComponent } from "../../card-produtos/card-produtos.component";

@Component({
  selector: 'app-home',
  imports: [ContainerComponent, CardProdutosComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
