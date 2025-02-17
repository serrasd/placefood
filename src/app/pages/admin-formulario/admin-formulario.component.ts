import { Component } from '@angular/core';
import { CrudTableComponent } from "../../components/crud-tabela/crud-tabela.component";
import { AdminHeaderComponent } from "../../components/admin-header/admin-header.component";

@Component({
  selector: 'app-admin-formulario',
  imports: [CrudTableComponent, AdminHeaderComponent],
  templateUrl: './admin-formulario.component.html',
  styleUrl: './admin-formulario.component.css'
})
export class AdminFormularioComponent {

}
