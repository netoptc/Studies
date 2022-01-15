import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlunosService } from '../alunos.service';

@Component({
  selector: 'app-aluno-form',
  templateUrl: './aluno-form.component.html',
  styleUrls: ['./aluno-form.component.css']
})
export class AlunoFormComponent implements OnInit {

  aluno: any;

  constructor(
    private _route: ActivatedRoute,
    private _routes: Router,
    private _alunosService: AlunosService
  ) { }

  ngOnInit(): void {
    this._route.params.subscribe(
      (params: any) =>{
        let id = params['id'];     
        this.aluno = this._alunosService.getAluno(id);
        if(this.aluno == null){
          this._routes.navigate(['/alunos']);
        }
      }
    )
  
  }


  trocarRota(){
    return confirm('Você deseja Realmente sair dessa rota');
  }


}
