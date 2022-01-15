import { Component, OnChanges, OnInit } from '@angular/core';
import { CriarCursoService } from './criar-curso.service';
import { CursosService } from '../cursos/cursos.service';
import { Subscriber } from 'rxjs';
@Component({
  selector: 'app-criar-curso',
  templateUrl: './criar-curso.component.html',
  styleUrls: ['./criar-curso.component.css'],
  //providers: [CriarCursoService] Caso o providers seja declaro dentro desse decorator somente esse componente terar acesso ao serviço, se for declaro no modulo todos o componentes terão que forão declarados no modulo terão acesso
})
export class CriarCursoComponent implements OnInit{

  lenghtCurso: number = 0;
  
  constructor(private _criarCursosService: CriarCursoService, private _cursosService: CursosService) { 
    
  }

  ngOnInit(): void {
    this.lenghtCurso = this._criarCursosService.getLenghtCurso(this._cursosService.getCursos()); 
    this._cursosService.eventCursoAdcionado.subscribe(
      criarCurso => this.lenghtCurso = this.lenghtCurso +1
    );
  }

}
