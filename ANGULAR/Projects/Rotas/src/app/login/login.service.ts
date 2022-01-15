import { Injectable } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Usuario } from './usuario';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  login: boolean = false
  
  mostrarMenuEmtter = new EventEmitter<boolean>(); 

  constructor() { }

  validAuth(usuario: Usuario){
    if(usuario.nome ==='usuario@email.com' && usuario.senha ==="123"){
      this.login = true;
      this.mostrarMenuEmtter.emit(true);
    }else{
      this.login = false;
      this.mostrarMenuEmtter.emit(false);
    }
  }
  getAuth(){
    return this.login;
  }
}
