import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardLoginComponent } from './card-login/card-login.component';
import { CardCadastroUsuarioComponent } from './card-cadastro-usuario/card-cadastro-usuario.component';
import { HomeComponent } from './home/home.component';
import { CadastroProdutosComponent } from './cadastro-produtos/cadastro-produtos.component';
import { CadastroReceitasComponent } from './cadastro-receitas/cadastro-receitas.component';
import { AlterarDadosComponent } from './alterar-dados/alterar-dados.component';
import { AlterarProdutosComponent } from './alterar-produtos/alterar-produtos.component';
import { AlterarReceitasComponent } from './alterar-receitas/alterar-receitas.component';


const routes: Routes = [
  { path: '', component: CardLoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'cadastro-usuario', component: CardCadastroUsuarioComponent },
  { path: 'cadastro-produto', component: CadastroProdutosComponent },
  { path: 'cadastro-receita', component: CadastroReceitasComponent },
  { path: 'alterar-dados', component: AlterarDadosComponent },
  { path: 'alterar-produtos', component: AlterarProdutosComponent },
  { path: 'alterar-receitas', component: AlterarReceitasComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
