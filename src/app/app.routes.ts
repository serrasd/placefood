import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { AdminComponent } from './pages//admin/admin.component';
import { AdminFormularioComponent } from './pages/admin-formulario/admin-formulario.component';
import { AdminEdicaoComponent } from './pages/admin-edicao/admin-edicao.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  { path: 'admin',
    component: AdminComponent },
  { path: 'formulario',
    component:  AdminFormularioComponent},
  { path: 'editar/:id',
    component:  AdminEdicaoComponent,
    data: { renderMode: 'no-prerender' }
  }
];
