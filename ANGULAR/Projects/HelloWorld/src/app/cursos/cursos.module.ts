import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CursosComponent } from './cursos.component';
import { CursosDetalhesComponent } from './cursos-detalhes/cursos-detalhes.component';

@NgModule({
  declarations: [
    CursosComponent,
    CursosDetalhesComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [ //Usado para informar quais componentes do modulo serão expostos para outros modulos  
    CursosComponent,
    CursosDetalhesComponent
  ]
 
})
export class CursosModule { }
