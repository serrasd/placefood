import { Component } from '@angular/core';
import { CrudTableComponent } from "../../components/crud-tabela/crud-tabela.component"
import { AdminHeaderComponent } from "../../components/admin-header/admin-header.component";

@Component({
  selector: 'app-admin',
  imports: [CrudTableComponent, AdminHeaderComponent],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent {

}
