import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { AdminHeaderComponent } from "../admin-header/admin-header.component";

@Component({
  selector: 'app-crud-table',
  standalone: true,
  imports: [CommonModule, FormsModule, AdminHeaderComponent],
  templateUrl: './crud-tabela.component.html',
  styleUrls: ['./crud-tabela.component.css'],
})
export class CrudTableComponent {
  novoProduto = {
    imagem: '',
    nome: '',
    preco: null,
    categoria: '',
    id: '',
  };

  constructor(private http: HttpClient) {}

  enviar() {
    this.novoProduto.id = this.gerarId();
    const categoria = this.novoProduto.categoria;

    console.log('Produto enviado:', this.novoProduto);

    this.http.post('http://localhost:3000/adicionar-produto', { categoria, novoProduto: this.novoProduto }).subscribe(
      (response) => {
        console.log('Produto criado com sucesso', response);
      },
      (error) => {
        console.log('Erro ao criar produto', error);
      }
    );
  }

  gerarId(): string {
    return [...Array(24)].map(() => Math.random().toString(36)[2]).join('');
  }


}
