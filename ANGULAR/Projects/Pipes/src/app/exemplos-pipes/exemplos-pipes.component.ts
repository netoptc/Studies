import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-exemplos-pipes',
  templateUrl: './exemplos-pipes.component.html',
  styleUrls: ['./exemplos-pipes.component.css']
})
export class ExemplosPipesComponent implements OnInit {


  cursos: string[] =['python', 'Java', 'Angular'];
  filtro:string ='';

  livro: any = {
    titulo: 'João e Maria',
    rating: 4.5312,
    paginas: 51,
    preco: 25.99,
    dataLancamento: new Date(2021,5,23),
    url: 'https://google.com.br'
  }
  constructor() { }

  ngOnInit(): void {
  }

  addCurso(curso:string){
    this.cursos.push(curso);
  }
  getCursoFilter(){
    if(this.cursos.length ===0 || this.filtro === null || this.filtro.trim() === ''){
      return this.cursos;
    }

    let filter = this.filtro.toLocaleLowerCase();
    
    return this.cursos.filter(function (value:any) { return value.toLocaleLowerCase().indexOf(filter) !=-1 });
 
  }
  //Promise é executado quando atingir o timeout 2000 2 segundos
  valorAsync1 = new Promise((resolve, reject) =>{
    setTimeout(() => resolve('Valor assíncrono'),2000); 
  });


}
