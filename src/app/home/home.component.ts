import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  form: FormGroup = new FormGroup({
    nome: new FormControl('', Validators.required),
    cpf: new FormControl('', [Validators.required, Validators.pattern(/^[0-9.-]*$/), Validators.maxLength(14), Validators.minLength(14)]),
    email: new FormControl('', Validators.required),
    senha: new FormControl('', [Validators.required, Validators.minLength(9)])
  });
  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  irParaCadastroReceita(){
    this.router.navigate(['/cadastro-receita']);
  }
  irParaCadastroProduto(){
    this.router.navigate(['/cadastro-produto']);
  }
  irParaAlterarDados(){
    this.router.navigate(['/alterar-dados']);
  }
  irParaHome(){
    this.router.navigate(['/home']);
  }
  irParaLogin(){
    this.router.navigate(['']);
  }

}
