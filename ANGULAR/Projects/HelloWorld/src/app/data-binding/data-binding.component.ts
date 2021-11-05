import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  constructor() { }
  
  url = 'https://loiane.training/';
  urlImage = 'http://lorempixel.com/400/200/sports/';
  cursoBoolena: boolean = true;
  valorAtual: string = ''; 
  valorSalvo: string = ''; 
  mouseOver: boolean = false;
  nome: string = 'João Queiroz';
  
  //Criando uma objeto
  pessoa: any = {
    nome: "Def",
    idade: 18
  }

  getValue(){
    return 1;
  }
  getBoolean(){
    return this.cursoBoolena;
  }

  myFunctiOnClick(){
    alert('Click');
  }
  myFunctinValorAtual(evento: KeyboardEvent){
    this.valorAtual = (<HTMLInputElement>evento.target).value;
  }
  myFunctinValorSalvo(evento: any){
    this.valorSalvo = (<HTMLInputElement>evento.target).value; 
  }
  myFunctionGetValueElemet(evento: any){
    return (<HTMLInputElement>evento.target).value;
  }

  onMouseOver(){
    this.mouseOver = !this.mouseOver //Estou invertado o valor da variavel mouseOver, então se for True passa a ser false
  }

  ngOnInit(): void {
  }

}
