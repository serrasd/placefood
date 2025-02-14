import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Produto } from "../../interface/produto.model"
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-tabela',
  imports: [CommonModule, MatIconModule, MatButtonModule],
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

deletar(id: string) {
  console.log('botao clicado')
  this.http.delete(`http://localhost:3000/deletar-produto/${id}`).subscribe(
    (response) => {
      console.log('Produto deletado com sucesso', response);
    },
    (error) => {
      console.log('Erro ao deletar produto', error);
      }
   );

  }
}
