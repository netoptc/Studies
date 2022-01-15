import { Component, OnInit } from '@angular/core';
import { BooleanLiteral } from 'typescript';

@Component({
  selector: 'app-diretiva-customizada',
  templateUrl: './diretiva-customizada.component.html',
  styleUrls: ['./diretiva-customizada.component.css']
})
export class DiretivaCustomizadaComponent implements OnInit {
  
  
  mostrarCursos: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

}
