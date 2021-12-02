import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-curso',
  templateUrl: './imput-property.component.html',
  styleUrls: ['./imput-property.component.css']
})
export class ImputPropertyComponent implements OnInit {

  /*Criando uma propriedade para poder ser usado no template, usamos o decorator Input para poder 'transformar' uma variavel em propriedade*/
  @Input('nome') nomeCurso: string = '';
  @Input() precoCurso: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
