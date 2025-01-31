import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { PlacefoodComponent } from './placefood/placefood.component';
import { NavComponent } from './nav/nav.component';
import { NzDemoCarouselAutoplayComponent } from './carousel01/carousel01.component';
import { ContainerComponent } from './container/container.component';
import { CardProdutosComponent } from './card-produtos/card-produtos.component';

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
