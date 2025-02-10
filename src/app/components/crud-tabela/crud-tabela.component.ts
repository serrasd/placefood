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
  formData = { nome: '', preco: 0, imagem: '' };
  searchQuery = '';

  addItem() {
    if (!this.formData.nome || !this.formData.preco || !this.formData.imagem) {
      alert('Por favor, preencha todos os campos antes de salvar.');
      return;
    }

    if (this.editingIndex === null) {
      this.items.push({ ...this.formData });
    } else {
      this.items[this.editingIndex] = { ...this.formData };
      this.editingIndex = null;
    }

    this.resetForm();
    this.clearFileInput();
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
    this.formData = { nome: '', preco: 0, imagem: '' };
    this.editingIndex = null;
  }


  filterItems() {
    return this.items.filter((item) =>
      item.nome.toLowerCase().includes(this.searchQuery.toLowerCase())
    );
  }


  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.formData.imagem = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  }

  clearFileInput() {
    const fileInput = document.querySelector('input[type="file"]') as HTMLInputElement;
    if (fileInput) {
      fileInput.value = '';
    }
  }
}
