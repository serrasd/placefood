import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NzDemoCarouselAutoplayComponent } from './carousel01.component';

describe('Carousel01Component', () => {
  let component: NzDemoCarouselAutoplayComponent;
  let fixture: ComponentFixture<NzDemoCarouselAutoplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NzDemoCarouselAutoplayComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(NzDemoCarouselAutoplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
