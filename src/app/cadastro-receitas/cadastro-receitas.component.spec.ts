import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroReceitasComponent } from './cadastro-receitas.component';

describe('CadastroReceitasComponent', () => {
  let component: CadastroReceitasComponent;
  let fixture: ComponentFixture<CadastroReceitasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastroReceitasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroReceitasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
