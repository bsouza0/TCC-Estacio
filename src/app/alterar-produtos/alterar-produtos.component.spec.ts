import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlterarProdutosComponent } from './alterar-produtos.component';

describe('AlterarProdutosComponent', () => {
  let component: AlterarProdutosComponent;
  let fixture: ComponentFixture<AlterarProdutosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlterarProdutosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlterarProdutosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
