import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro-receitas',
  templateUrl: './cadastro-receitas.component.html',
  styleUrls: ['./cadastro-receitas.component.css']
})
export class CadastroReceitasComponent implements OnInit {
  form: FormGroup = new FormGroup({
    nome: new FormControl('', Validators.required),
    produto: new FormControl('', Validators.required),
    quantidade: new FormControl('', [Validators.required, Validators.pattern(/^[1-9][0-9]*$/)]),
    descricao: new FormControl('')
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

  cadastrar(){
    if(this.form.valid){
      this._snackBar.open('Cadastro de receita realizado com sucesso', 'Ok');
      /*this.form = new FormGroup({
        nome: new FormControl('', Validators.required),
        quantidade: new FormControl('', [Validators.required, Validators.pattern(/^[1-9][0-9]*$/)]),
        vencimento: new FormControl('', Validators.required),
        preco: new FormControl('', [Validators.required, Validators.pattern(/^[1-9][0-9]*$/)])
      });
      this.form.get('nome')?.markAsPristine();
      this.form.get('quantidade')?.markAsPristine();
      this.form.get('vencimento')?.markAsPristine();
      this.form.get('preco')?.markAsUntouched();*/
    }
    else if(this.form.get('nome')?.invalid){
      this._snackBar.open('Nome é obrigatório', 'Ok');
    }
    else if( this.form.get('produto')?.invalid){
      this._snackBar.open('Produto é obrigatório', 'Ok');
    }
    else if(this.form.get('quantidade')?.invalid){
      this._snackBar.open('Quantidade é obrigatório e não pode ser negativo', 'Ok');
    }
  }

  cancelar(){
    this.router.navigate(['/home']);
  }
}
