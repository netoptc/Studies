import { Injectable } from "@angular/core";

@Injectable()
export class CriarCursoService{
    getLenghtCurso(cursos:String[]){
        return cursos.length;
    }

}