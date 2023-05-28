import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlterarReceitasComponent } from './alterar-receitas.component';

describe('AlterarReceitasComponent', () => {
  let component: AlterarReceitasComponent;
  let fixture: ComponentFixture<AlterarReceitasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlterarReceitasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlterarReceitasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
