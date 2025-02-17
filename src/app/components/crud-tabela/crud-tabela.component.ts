import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-crud-table',
  standalone: true,
  imports: [CommonModule, FormsModule, ],
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

  urlPreview: string | null = null

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

  cancelar(): void {
    this.novoProduto = {
      imagem: '',
      nome: '',
      preco: null,
      categoria: '',
      id: ''
    };
    this.urlPreview = null;
  }


  gerarId(): string {
    return [...Array(24)].map(() => Math.random().toString(36)[2]).join('');
  }

  converterImagem(event: Event): void {
    const imagem = event.target as HTMLInputElement;
    if (!imagem.files || imagem.files.length === 0) {
      return;
    }

    const arquivo = imagem.files[0];
    const reader = new FileReader();

    reader.onload = () => {
      this.novoProduto.imagem = reader.result as string;
      this.urlPreview = reader.result as string;
    }
    reader.readAsDataURL(arquivo);
  }

}
