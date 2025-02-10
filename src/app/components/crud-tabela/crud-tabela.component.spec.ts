import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudTabelaComponent } from './crud-tabela.component';

describe('CrudTabelaComponent', () => {
  let component: CrudTabelaComponent;
  let fixture: ComponentFixture<CrudTabelaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CrudTabelaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrudTabelaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
