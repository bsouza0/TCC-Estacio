import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router} from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-alterar-dados',
  templateUrl: './alterar-dados.component.html',
  styleUrls: ['./alterar-dados.component.css']
})
export class AlterarDadosComponent implements OnInit {
  form: FormGroup = new FormGroup({
    nome: new FormControl('', Validators.required),
    cpf: new FormControl('', [Validators.nullValidator, Validators.pattern(/^[0-9.-]*$/), Validators.maxLength(14), Validators.minLength(14)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    senha: new FormControl('', [Validators.required, Validators.minLength(9)])
  });

  constructor(
    private router: Router,
    private _snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
  }
  submit() {
    if (this.form.valid) {
      console.log(this.form);
    }
  }
  alterar(){
    if(this.form.valid){
      this.router.navigate(['/home']);
    }
    else if(this.form.get('nome')?.invalid){
      this._snackBar.open('Nome é obrigatório', 'Ok');
    }
    else if(this.form.get('cpf')?.invalid){
      this._snackBar.open('CPF é obrigatório e possui 11 dígitos', 'Ok');
    }
    else if( this.form.get('email')?.invalid){
      this._snackBar.open('Email é obrigatório deve possuir @', 'Ok');
    }
    else if( this.form.get('senha')?.invalid){
      this._snackBar.open('A Senha deve possuir no mínimo 8 dígitos', 'Ok');
    }
  }
}
