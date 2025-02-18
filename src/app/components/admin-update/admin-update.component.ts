import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Produto } from '../../interface/produto.model';
import { FormsModule } from '@angular/forms';
import { map, Observable } from 'rxjs';

@Component({
  selector: 'app-admin-update',
  imports: [FormsModule],
  templateUrl: './admin-update.component.html',
  styleUrl: './admin-update.component.css',
})
export class AdminUpdateComponent {
  novoProduto: any = {};
  produto: Produto | null = null;
  urlPreview: string | null = null;

  constructor(private http: HttpClient, private route: ActivatedRoute) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');

    if (id) {
      this.buscarProduto(id).subscribe((produto) => {
        if (produto) {
          this.produto = produto;
          this.novoProduto = { ...this.produto };
        } else {
          alert('Produto não encontrado');
        }
      });
    }
  }

  atualizar(): void {
    if (!this.novoProduto) {
      alert('Produto não encontrado.');
      return;
    }
    this.http
      .put(
        `http://192.168.208.62:3000/atualizar-produto/${this.novoProduto.id}`,
        this.novoProduto
      )
      .subscribe(
        () => {
          alert('Produto atualizado com sucesso');
        },
        (error) => {
          alert(`Produto não atualizado, erro: ${error.message}`);
        }
      );
  }

  cancelar(): void {
    this.novoProduto = {
      imagem: '',
      nome: '',
      preco: null,
      categoria: '',
      id: '',
    };
    this.urlPreview = null;
  }

  buscarProduto(id: string): Observable<Produto | undefined> {
    return this.obterProdutos().pipe(
      map((produtosArray: Produto[]) =>
        produtosArray.find((produto) => produto.id === id)
      )
    );
  }

  obterProdutos(): Observable<Produto[]> {
    return this.http.get<any>('http://192.168.208.62:3000/produtos').pipe(
      map(response => {
        if (Array.isArray(response)) {
          return response;
        } else if (response.produtos && response.destaques && response.hortifruti) {
          return [...response.produtos, ...response.destaques, ...response.hortifruti];
        } else {
          console.error('Resposta da API não é um array ou não contém os arrays esperados:', response);
          return [];
        }
      })
    );
  }
}
