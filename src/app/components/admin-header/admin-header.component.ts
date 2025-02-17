import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-admin-header',
  imports: [MatIconModule],
  templateUrl: './admin-header.component.html',
  styleUrl: './admin-header.component.css'
})
export class AdminHeaderComponent {
  menuAberto: boolean = false;

  toggleMenu(): void {
    this.menuAberto = !this.menuAberto;
  }
}
