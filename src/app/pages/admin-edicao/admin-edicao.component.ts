import { Component } from '@angular/core';
import { AdminHeaderComponent } from "../../components/admin-header/admin-header.component";
import { AdminUpdateComponent } from "../../components/admin-update/admin-update.component";

@Component({
  selector: 'app-admin-edicao',
  imports: [AdminHeaderComponent, AdminUpdateComponent],
  templateUrl: './admin-edicao.component.html',
  styleUrl: './admin-edicao.component.css'
})
export class AdminEdicaoComponent {

}
