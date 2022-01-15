import { Component, OnInit } from '@angular/core';
import { LoginService } from './login/login.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'Rotas';
  pagina: any = 1;
  mostrarMenu: boolean = false;

  constructor(private _loginService: LoginService){ }

  ngOnInit(): void {
    this._loginService.mostrarMenuEmtter.subscribe(
      (mostrar) => {
        this.mostrarMenu = mostrar;
      }
    );
  }

}
