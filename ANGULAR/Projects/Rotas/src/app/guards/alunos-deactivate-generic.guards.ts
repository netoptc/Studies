import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { trocarRota } from './interface-generic';

@Injectable()
export class AlunosDeactivateGenericGuards implements CanDeactivate<trocarRota> {
    canDeactivate(
        component: trocarRota,
        currentRoute: ActivatedRouteSnapshot, 
        currentState: RouterStateSnapshot
    ): Observable<boolean>|Promise<boolean>|boolean {
        return component.podeDesativar() ? true : false;
    }
}