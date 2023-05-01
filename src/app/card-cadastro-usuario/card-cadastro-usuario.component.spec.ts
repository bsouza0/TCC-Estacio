import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardCadastroUsuarioComponent } from './card-cadastro-usuario.component';

describe('CardCadastroUsuarioComponent', () => {
  let component: CardCadastroUsuarioComponent;
  let fixture: ComponentFixture<CardCadastroUsuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardCadastroUsuarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardCadastroUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
