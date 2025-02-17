import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminEdicaoComponent } from './admin-edicao.component';

describe('AdminEdicaoComponent', () => {
  let component: AdminEdicaoComponent;
  let fixture: ComponentFixture<AdminEdicaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminEdicaoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminEdicaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
