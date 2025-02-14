import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Produto } from "../../interface/produto.model"
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-tabela',
  imports: [CommonModule, MatIconModule, MatButtonModule, RouterModule, FormsModule],
  templateUrl: './tabela.component.html',
  styleUrl: './tabela.component.css'
})
export class TabelaComponent {
  produtos: Produto[] = [];
  produtosFiltrados: Produto[] = [];
  filtro: string = '';

   constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.mostrarProdutos();
  }

mostrarProdutos(): void {
  this.http.get<any>('assets/produtos.json').subscribe((data) => {
    this.produtos = [...data.produtos, ...data.destaques, ...data.hortifruti];
    this.produtosFiltrados = [...this.produtos];
  });
}

filtrarProdutos(): void {
  const filtroLowerCase = this.filtro.toLowerCase();
  this.produtosFiltrados = this.produtos.filter((produto) =>
    produto.nome.toLowerCase().includes(filtroLowerCase)
  );
}

deletar(id: string) {
  const confirmacao = window.confirm('Você tem certeza que deseja excluir este produto?');
  if (confirmacao) {
    console.log('Botão clicado');
    this.http.delete(`http://localhost:3000/deletar-produto/${id}`).subscribe(
      (response) => {
        console.log('Produto deletado com sucesso', response);
      },
      (error) => {
        console.log('Erro ao deletar produto', error);
      }
    );
  } else {
    console.log('Exclusão cancelada');
  }
}

}
