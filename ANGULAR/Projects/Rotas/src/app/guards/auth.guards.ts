import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from '../login/login.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuards implements  CanActivate{

  constructor( private _loginService: LoginService, private _router: Router) { }

  //Criando o metodo para o guarda de rotas
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean{
    if(this._loginService.getAuth()){
      return true;
    } 
    this._router.navigate(['/login']);
    return false;
    
  }
  
  
  
}
