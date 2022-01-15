import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Aluno } from '../aluno';
import { AlunosService } from '../alunos.service';

@Injectable()

export class AlunosResolverGuards implements Resolve<Aluno> {
    
    constructor(private _alunosService: AlunosService){};

    resolve(route: ActivatedRouteSnapshot): Observable<Aluno> | Promise<any> | any {
        
        let id = route.params['id'];
        return this._alunosService.getAluno(id);
    }
}