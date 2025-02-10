import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  usuario: string = '';
  senha: string = '';

  constructor(private router: Router) {}

  onSubmit(): void {
    if (this.usuario === 'admin' && this.senha === 'admin') {
      this.router.navigate(['/admin']);
    } else {
      alert('Usuário ou senha incorretos!');
    }
  }
}
