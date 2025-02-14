import { Component } from '@angular/core';
import { AdminHeaderComponent } from "../../components/admin-header/admin-header.component";
import { TabelaComponent } from "../../components/tabela/tabela.component";

@Component({
  selector: 'app-admin',
  imports: [AdminHeaderComponent, TabelaComponent],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent {

}
