import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlunosDeactivateGenericGuards } from '../guards/alunos-deactivate-generic.guards';
import { AlunosDeactivateGuards } from '../guards/alunos-deactivate.guards';
import { AlunosGuards } from '../guards/alunos.guards';
import { AuthGuards } from '../guards/auth.guards';
import { AlunoDetalhesComponent } from './aluno-detalhes/aluno-detalhes.component';
import { AlunoFormComponent } from './aluno-form/aluno-form.component';
import { AlunosComponent } from './alunos.component';
import { AlunosResolverGuards } from './guards/aluno.resolver.guards';

/*Criando rotas filhas*/
const alunosRoutes: Routes = [
    {path: 'alunos', component: AlunosComponent,children:[
        {path: 'novo', component: AlunoFormComponent},
        {path: ':id', component: AlunoDetalhesComponent, canDeactivate: [AlunosDeactivateGenericGuards], resolve: {aluno: AlunosResolverGuards}},
        {path: ':id/edit', component: AlunoFormComponent, canDeactivate: [AlunosDeactivateGuards]}
    ], canActivate: [AuthGuards], canActivateChild: [AlunosGuards]},

];

@NgModule({
  imports: [RouterModule.forChild(alunosRoutes)],
  exports: [RouterModule]
})
export class AlunosRoutingModule { }
