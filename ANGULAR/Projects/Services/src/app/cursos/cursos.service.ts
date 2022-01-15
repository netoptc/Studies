import { Injectable } from "@angular/core";
import { EventEmitter } from "@angular/core";

@Injectable()
export class CursosService{

    private _cursos: String[] = ['Python', 'Angular', 'C++', 'JavaScript'];
    
    eventCursoAdcionado: EventEmitter<string> = new EventEmitter();

    getCursos(){
        return this._cursos;
    }
   
    getLenghtCurso(cursos:String[]){
        return cursos.length;
    }

    addCurso(curso: string){
        this._cursos.push(curso);
        this.eventCursoAdcionado.emit(curso);
    }
} 