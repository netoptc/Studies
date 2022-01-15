import { Component, OnInit } from '@angular/core';
import { CursosService } from './cursos.service';



@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})


export class CursosComponent implements OnInit{


  cursos: String[] = [];
  
  cursosService: CursosService;
  
  constructor(cursosService:CursosService) { 
    this.cursosService = cursosService;
  }

  AddNewCurso(curso: string){
    this.cursosService.addCurso(curso);
  }
  
  ngOnInit(): void {
    this.cursos = this.cursosService.getCursos();
  }
  
}
