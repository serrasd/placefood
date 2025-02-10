import { Component } from '@angular/core';
import { AdminHeaderComponent } from "../../components/admin-header/admin-header.component";
import { CrudTableComponent } from "../../components/crud-tabela/crud-tabela.component"

@Component({
  selector: 'app-admin',
  imports: [AdminHeaderComponent, CrudTableComponent],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent {

}
