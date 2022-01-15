import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';


import { CriarCursoService } from './criar-curso.service';
import { CriarCursoComponent } from './criar-curso.component';

@NgModule({
  declarations: [
    CriarCursoComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [CriarCursoComponent],
  providers: [CriarCursoService]

})
export class CriarCursoModule { }
