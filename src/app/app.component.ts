import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { PlacefoodComponent } from './components/placefood/placefood.component';
import { NavComponent } from './components/nav/nav.component';
import { NzDemoCarouselAutoplayComponent } from './components/carousel01/carousel01.component';
import { ContainerComponent } from './components/container/container.component';
import { CardProdutosComponent } from './components/card-produtos/card-produtos.component';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    PlacefoodComponent,
    NavComponent,
    ContainerComponent,
    CardProdutosComponent,
    NzDemoCarouselAutoplayComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'placefood-developer';
}
