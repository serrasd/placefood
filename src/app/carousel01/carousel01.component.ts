import { Component, OnInit } from '@angular/core';
import { NgFor } from '@angular/common';
import { CarouselComponent, CarouselInnerComponent, CarouselItemComponent, ThemeDirective } from '@coreui/angular';

@Component({
  selector: 'docs-carousel01',
  templateUrl: './carousel01.component.html',
  styleUrls: ['./carousel01.component.css'],
  standalone: true,
  imports: [ThemeDirective, CarouselComponent, CarouselInnerComponent, NgFor, CarouselItemComponent]
})
export class Carousel01Component implements OnInit {

  slides: any[] = new Array(3).fill({ id: -1, src: '', title: '', subtitle: '' });

  ngOnInit(): void {
    this.slides[0] = {
      src: './assets/banner.png'
    };
    this.slides[1] = {
      src: './assets/banner2.png'
    };
    this.slides[2] = {
      src: './assets/banner3.png'
    };
  }

  onItemChange($event: any): void {
    console.log('Carousel onItemChange', $event);
  }
}
