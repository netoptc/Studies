import { Injectable } from '@angular/core';
import { CursoDetalhesComponent } from './curso-detalhes/curso-detalhes.component';

@Injectable({
  providedIn: 'root'
})
export class CursosService {
  constructor() { }

  getCursos(){
    return [
      {id: 1, nome: 'Angular'},
      {id: 2, nome: 'Python'},
      {id: 3, nome: 'C++'},
      {id: 4, nome: 'TypeScript'},
      {id: 5, nome: 'JavaScript'},
      {id: 6, nome: 'Java'},
      {id: 7, nome: '.Net'},
      {id: 8, nome: 'Ruby'},
      {id: 9, nome: 'Go'},
      {id: 10, nome: 'React'}
    ]
  }
  getCurso(id: number){
    let cursos = this.getCursos();
    for(let i = 0; i < cursos.length; i++){
      let curso = cursos[i];
      if(curso.id == id){
        return curso;
      }
    }
    return null; 
   } 
  
}
