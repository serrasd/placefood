import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CrudService {
  private items: any[] = [];

  getItems() {
    return this.items;
  }

  addItem(item: any) {
    this.items.push(item);
  }

  updateItem(index: number, updatedItem: any) {
    this.items[index] = updatedItem;
  }

  deleteItem(index: number) {
    this.items.splice(index, 1);
  }
}
