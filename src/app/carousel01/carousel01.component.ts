import { Component } from '@angular/core';

import { NzCarouselModule } from 'ng-zorro-antd/carousel';

@Component({
  selector: 'nz-demo-carousel-autoplay',
  imports: [NzCarouselModule],
  templateUrl: './carousel01.component.html',
  styleUrl: './carousel01.component.css'
})
export class NzDemoCarouselAutoplayComponent {
  array = [
    './assets/banner.png',
    './assets/banner2.png'
  ];
}
