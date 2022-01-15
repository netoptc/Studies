import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlunosComponent } from './alunos.component';
import { AlunoDetalhesComponent } from './aluno-detalhes/aluno-detalhes.component';
import { AlunoFormComponent } from './aluno-form/aluno-form.component';
import { AlunosRoutingModule } from './alunos.routing.module';
import { AlunosService } from './alunos.service';
import { AlunosDeactivateGuards } from '../guards/alunos-deactivate.guards';
import { AlunosDeactivateGenericGuards } from '../guards/alunos-deactivate-generic.guards';
import { AlunosResolverGuards } from './guards/aluno.resolver.guards';


@NgModule({
  declarations: [
    AlunosComponent,
    AlunoDetalhesComponent,
    AlunoFormComponent
  ],
  imports: [
    CommonModule,
    AlunosRoutingModule
  ],
  providers: [
    AlunosService,
    AlunosDeactivateGuards,
    AlunosDeactivateGenericGuards,
    AlunosResolverGuards
  ]
})
export class AlunosModule { }

