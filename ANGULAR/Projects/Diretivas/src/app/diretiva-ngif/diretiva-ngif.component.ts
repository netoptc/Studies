import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretiva-ngif',
  templateUrl: './diretiva-ngif.component.html',
  styleUrls: ['./diretiva-ngif.component.css']
})
export class DiretivaNgifComponent implements OnInit {

  cursos:string[] = [];
  mostrarCursos = false;

  constructor() { }

  ngOnInit(): void {
  }

  onMonstrarCusos(){
    this.mostrarCursos = !this.mostrarCursos;
  }

}
