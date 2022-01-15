import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuards } from '../guards/auth.guards';
import { CursosGuards } from '../guards/cursos.guards';
import { CursoDetalhesComponent } from './curso-detalhes/curso-detalhes.component';
import { CursoNaoEncontradoComponent } from './curso-nao-encontrado/curso-nao-encontrado.component';
import { CursosComponent } from './cursos.component';


/*Criando rotas filhas*/
const alunosRoutes: Routes = [
  {path: 'cursos', component: CursosComponent, canActivate: [AuthGuards], canActivateChild: [CursosGuards]},
  {path: 'cursos/curso-nao-encontrado', component: CursoNaoEncontradoComponent},
  {path: 'cursos/:id', component: CursoDetalhesComponent}
];

@NgModule({
  imports: [RouterModule.forChild(alunosRoutes)],
  exports: [RouterModule]
})
export class CursosRoutingModule { }
