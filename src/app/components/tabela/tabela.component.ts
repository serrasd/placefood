import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Produto } from "../../interface/produto.model"
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tabela',
  imports: [CommonModule],
  templateUrl: './tabela.component.html',
  styleUrl: './tabela.component.css'
})
export class TabelaComponent {
  produtos: Produto[] = [];

   constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.mostrarProdutos();
  }

mostrarProdutos(): void {
  this.http.get<any>('assets/produtos.json').subscribe((data) => {
    this.produtos = [...data.produtos, ...data.destaques, ...data.hortifruti];
  });
}


}
