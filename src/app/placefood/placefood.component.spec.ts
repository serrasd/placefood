import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlacefoodComponent } from './placefood.component';

describe('PlacefoodComponent', () => {
  let component: PlacefoodComponent;
  let fixture: ComponentFixture<PlacefoodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlacefoodComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlacefoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
