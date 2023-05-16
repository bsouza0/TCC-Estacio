import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatToolbarModule } from '@angular/material/toolbar';

import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';

import { CardLoginComponent } from './card-login/card-login.component';
import { AppRoutingModule } from './app-routing.module';
import { CardCadastroUsuarioComponent } from './card-cadastro-usuario/card-cadastro-usuario.component';
import { HomeComponent } from './home/home.component'

import { ReactiveFormsModule } from '@angular/forms';
import { CadastroProdutosComponent } from './cadastro-produtos/cadastro-produtos.component';
import { CadastroReceitasComponent } from './cadastro-receitas/cadastro-receitas.component';
import { MAT_DATE_LOCALE, MatNativeDateModule } from '@angular/material/core';
import { AlterarDadosComponent } from './alterar-dados/alterar-dados.component';



@NgModule({
  declarations: [
    AppComponent,
    CardLoginComponent,
    CardCadastroUsuarioComponent,
    HomeComponent,
    CadastroProdutosComponent,
    CadastroReceitasComponent,
    AlterarDadosComponent
  ],
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSnackBarModule,
    MatDatepickerModule,
    MatNativeDateModule,
    AppRoutingModule,
    MatListModule,
    MatMenuModule
  ],
  providers: [ MatDatepickerModule ,
    {provide: MAT_DATE_LOCALE, useValue: 'pt-BR'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
