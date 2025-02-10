import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-crud-table',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './crud-tabela.component.html',
  styleUrls: ['./crud-tabela.component.css'],
})
export class CrudTableComponent {
  items: any[] = [];
  editingIndex: number | null = null;
  formData = { nome: '', descricao: '', habilidades: '', armas: '' };
  searchQuery = '';

  constructor() {}

  addItem() {
    if (this.editingIndex === null) {
      this.items.push({ ...this.formData });
    } else {
      this.items[this.editingIndex] = { ...this.formData };
      this.editingIndex = null;
    }
    this.resetForm();
  }

  editItem(index: number) {
    this.editingIndex = index;
    this.formData = { ...this.items[index] };
  }

  deleteItem(index: number) {
    const confirmacao = confirm('Tem certeza de que deseja excluir este item?');
    if (confirmacao) {
      this.items.splice(index, 1);
    }
  }

  resetForm() {
    this.formData = { nome: '', descricao: '', habilidades: '', armas: '' };
  }

  filterItems() {
    return this.items.filter((item) =>
      item.nome.toLowerCase().includes(this.searchQuery.toLowerCase())
    );
  }
}
