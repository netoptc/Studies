import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';



@Injectable()
export class AlunosGuards implements CanActivateChild{
    
    canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean {
        console.log("Guarda de rotas filhas");
        if(state.url.includes('edit')){
            //alert('Usuario sem permissão para editar');
            //return false;
        }
        return true;
    }

    constructor(){}
}