import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzDemoCarouselAutoplayComponent } from '../../components/carousel01/carousel01.component';
import { CardProdutosComponent } from '../../components/card-produtos/card-produtos.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { NavComponent } from '../../components/nav/nav.component';
import { PlacefoodComponent } from '../../components/placefood/placefood.component';
import { HttpClient } from '@angular/common/http';
import { Produto } from '../../interface/produto.model';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CardProdutosComponent,
    CommonModule,
    FooterComponent,
    NavComponent,
    PlacefoodComponent,
    NzDemoCarouselAutoplayComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  produtos: Produto[] = [];
  destaques: Produto[] = [];
  hortifruti: Produto[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.mostrarProdutos();
    this.mostrarDestaques();
    this.mostrarHortifruti();
  }

  mostrarProdutos(): void {
    this.http.get<any>('assets/produtos.json').subscribe((data) => {
      this.produtos = [...data.produtos
      ];
    });
  }

  mostrarDestaques(): void {
    this.http.get<any>('assets/produtos.json').subscribe((data) => {
      this.destaques = [...data.destaques
      ];
    });
  }

  mostrarHortifruti(): void {
    this.http.get<any>('assets/produtos.json').subscribe((data) => {
      this.hortifruti = [...data.hortifruti
      ];
    });
  }

  scrollLeft(carouselId: string): void {
    const carousel = document.getElementById(carouselId);
    if (carousel) {
      carousel.scrollBy({ left: -350, behavior: 'smooth' });
    }
  }

  scrollRight(carouselId: string): void {
    const carousel = document.getElementById(carouselId);
    if (carousel) {
      carousel.scrollBy({ left: 350, behavior: 'smooth' });
    }
  }
}
