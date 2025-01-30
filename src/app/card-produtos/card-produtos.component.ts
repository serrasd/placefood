import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-card-produtos',
  standalone: true,
  imports: [MatCardModule, MatButtonModule],
  templateUrl: './card-produtos.component.html',
  styleUrl: './card-produtos.component.css'
})
export class CardProdutosComponent { }
