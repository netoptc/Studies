import { HtmlAstPath } from '@angular/compiler';
import { Component, OnInit, EventEmitter, Output, ViewChild, ElementRef} from '@angular/core';
import { NumberLiteralType } from 'typescript';

@Component({
  selector: 'contador',
  templateUrl: './output-property.component.html',
  styleUrls: ['./output-property.component.css']
})
export class OutputPropertyComponent implements OnInit {

  constructor() { }
  contadorValue: number  = 0;
  //Decorator Output é usado para expor informações/evento  do compoente filho (OutputPropertyComponent) para o pai (data-binding)
  @Output() mudouValor = new EventEmitter();//Criando um evento customizado(OBS: precisa do EventEmitter do pacote core)
  @ViewChild('myVarValue') varMudarValor: any; 

  decrementa(){
    this.contadorValue--;
    this.mudouValor.emit('Valor mudou'); // Estou emitindo um evento para o meu objeto pai, posso passar qualquer valor
    console.log(this.varMudarValor);
  }
  incrementa(){
    this.contadorValue++;
    this.mudouValor.emit('Valor mudou'); 
    console.log(<ElementRef>this.varMudarValor.nativeElement.value);
  }

  onMudouValor(evento: any){
    console.log(evento);
  }

  test(){
    alert('test');
  }

  ngOnInit(): void {
  }

}
