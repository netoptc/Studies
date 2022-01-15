import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { CursosComponent } from './cursos.component';
import { CursoDetalhesComponent } from './curso-detalhes/curso-detalhes.component';
import { CursosService } from './cursos.service';
import { CursoNaoEncontradoComponent } from './curso-nao-encontrado/curso-nao-encontrado.component';
import { RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { CursosRoutingModule } from "./cursos.routing.module";



@NgModule({
    declarations:[
        CursosComponent,
        CursoDetalhesComponent,
        CursoNaoEncontradoComponent
    ],
    imports:[
        CommonModule,
        RouterModule,
        FormsModule,
        CursosRoutingModule
    ],
    providers:[
        CursosService
    ]
})

export class CursosModule{}