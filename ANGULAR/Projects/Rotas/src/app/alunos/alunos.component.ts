import { Component, OnInit } from '@angular/core';
import { Aluno } from './aluno';
import { AlunosService } from './alunos.service';

@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.css']
})
export class AlunosComponent implements OnInit {

  alunos: Aluno[]= [];

  constructor(private _alunosService: AlunosService) { }

  ngOnInit(): void {
     this.alunos = this._alunosService.getAlunos();
  }

}
