import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Carousel01Component } from './carousel01.component';

describe('Carousel01Component', () => {
  let component: Carousel01Component;
  let fixture: ComponentFixture<Carousel01Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Carousel01Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Carousel01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
