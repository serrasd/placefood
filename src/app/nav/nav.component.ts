import { Component } from '@angular/core';

@Component({
  selector: 'app-nav',
  imports: [],
  template: `
  <header>
    <nav class="navbar">
      <ul>
        <li>
          <p>Categorias</p>
        </li>
          <p>Venda no Placefood</p>
          <p>Mais vendidos</p>
          <p>Ofertas do dia</p>
          <p>Contato</p>
      </ul>
    </nav>
  </header>
  `,
  styleUrl: './nav.component.css'
})
export class NavComponent {

}
