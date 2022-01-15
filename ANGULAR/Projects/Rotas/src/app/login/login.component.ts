import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './login.service';
import { Usuario} from './usuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario: Usuario = new Usuario();

  constructor(
    private _loginService: LoginService,
    private _router: Router
  ) { }
  ngOnInit(): void {}

  validLogin(){
    
    console.log(this.usuario);
    this._loginService.validAuth(this.usuario)
    if(this._loginService.getAuth()){
      this._router.navigate(['/']);
    }
  }

}
