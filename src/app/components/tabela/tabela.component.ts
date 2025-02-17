import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Produto } from '../../interface/produto.model';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-tabela',
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule,
    RouterModule,
    FormsModule,
  ],
  templateUrl: './tabela.component.html',
  styleUrl: './tabela.component.css',
})
export class TabelaComponent {
  produtos: Produto[] = [];
  produtosFiltrados: Produto[] = [];
  produtosExibidos: Produto[] = [];
  filtro: string = '';
  paginaAtual: number = 1;
  itensPorPagina: number = 10;
  totalPaginas: number = 0;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.mostrarProdutos();
  }

  mostrarProdutos(): void {
    this.http.get<any>('assets/produtos.json').subscribe((data) => {
      this.produtos = [...data.produtos, ...data.destaques, ...data.hortifruti];
      this.produtosFiltrados = [...this.produtos];
      this.totalPaginas = Math.ceil(
        this.produtosFiltrados.length / this.itensPorPagina
      );
      this.atualizarPagina();
    });
  }

  filtrarProdutos(): void {
    const filtroLowerCase = this.filtro.toLowerCase();
    this.produtosFiltrados = this.produtos.filter((produto) =>
      produto.nome.toLowerCase().includes(filtroLowerCase)
    );

    this.totalPaginas = Math.ceil(
      this.produtosFiltrados.length / this.itensPorPagina
    );
    this.paginaAtual = 1;
    this.atualizarPagina();
  }

  deletar(id: string) {
    const confirmacao = window.confirm(
      'Você tem certeza que deseja excluir este produto?'
    );
    if (confirmacao) {
      console.log('Botão clicado');
      this.http
        .delete(`http://192.168.208.62:3000/deletar-produto/${id}`)
        .subscribe(
          (response) => {
            alert('Produto excluído com sucesso');
          },
          (error) => {
            alert('Erro ao excluir produto');
          }
        );
    } else {
      alert('Exclusão cancelada');
    }
  }

  atualizarPagina(): void {
    const inicio = (this.paginaAtual - 1) * this.itensPorPagina;
    const fim = inicio + this.itensPorPagina;
    this.produtosExibidos = this.produtosFiltrados.slice(inicio, fim);
  }

  proximaPagina(): void {
    if (this.paginaAtual < this.totalPaginas) {
      this.paginaAtual++;
      this.atualizarPagina();
    }
  }

  paginaAnterior(): void {
    if (this.paginaAtual > 1) {
      this.paginaAtual--;
      this.atualizarPagina();
    }
  }
}
