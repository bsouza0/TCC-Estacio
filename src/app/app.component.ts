import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tcc';
  isLoginOrCadastro: boolean = false;
  constructor(private router: Router){
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        if(event.url == '/' || event.url == '/cadastro-usuario'){
          this.isLoginOrCadastro = true;
        } else {
          this.isLoginOrCadastro = false
        }
          console.log(event.url);
      }
  });
  }
}


