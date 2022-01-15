import { NULL_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Aluno } from '../aluno';
import { AlunosService } from '../alunos.service';

@Component({
  selector: 'app-aluno-detalhes',
  templateUrl: './aluno-detalhes.component.html',
  styleUrls: ['./aluno-detalhes.component.css']
})
export class AlunoDetalhesComponent implements OnInit {

  aluno:any;

  constructor(
    private _route: ActivatedRoute,
    private _routes: Router,
    private _alunosService: AlunosService
  ) { }

  ngOnInit(): void {
      /* --ACESSANDO OS DADOS DO VIA PARAMETROS
      this._route.params.subscribe(
        (params: any) =>{
          let id = params['id'];     
          this.aluno = this._alunosService.getAluno(id);
          if(this.aluno == null){
            this._routes.navigate(['/alunos']);
          }
        }
      )*/
    

      /* --ACESSANDO OS DADOS VIA OS DADOS QUE FORAM PASSADOS POR RESOLVER*/
      this._route.data.subscribe(
        (info:any) => {
          this.aluno = info.aluno;
        }
      );
  }

  onClickEdit(){
    this._routes.navigate(['/alunos', this.aluno.id, 'edit']);
  }


  podeDesativar(){
    return confirm("Você deseja sair dessa Rota?");
  }
}
