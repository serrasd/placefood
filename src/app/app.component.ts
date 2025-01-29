import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PlacefoodComponent } from './placefood/placefood.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { NavComponent } from "./nav/nav.component";

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    PlacefoodComponent,
    MatToolbarModule,
    MatButtonModule,
    MatInputModule,
    NavComponent
],
  template: `<div class="cabecalho">
    <main>
      <header>
        <img
          src="../assets/logo-placefood.png"
          alt="logo"
          class="logo-placefood"
          aria-hidden="true"
        />
      </header>
      <section class="content">
        <app-placefood></app-placefood>
      </section>
    </main>
  </div>
<div>
  <app-nav></app-nav>
</div>`,
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'placefood-developer';
}
