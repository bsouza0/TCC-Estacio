import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router} from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-card-login',
  templateUrl: './card-login.component.html',
  styleUrls: ['./card-login.component.css']
})
export class CardLoginComponent implements OnInit {
  form: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    senha: new FormControl('', [Validators.required, Validators.minLength(9)]),
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

  login(){
    if(this.form.valid){
      this.router.navigate(['/home'])
    }
    else if( this.form.get('email')?.invalid){
      this._snackBar.open('E-mail é obrigatório e deve possuir @', 'Ok');
    }
    else if( this.form.get('senha')?.invalid){
      this._snackBar.open('A Senha deve possuir no mínimo 8 dígitos', 'Ok');
    }
  }

  cadastrar(){
      this.router.navigate(['/cadastro-usuario'])
  }
}
