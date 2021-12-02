import { Component, OnInit, Input, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewChecked, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-ciclo',
  templateUrl: './ciclo.component.html',
  styleUrls: ['./ciclo.component.css']
})
export class CicloComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewChecked, OnDestroy {

  constructor() { }

  @Input() valorInicial: number =  0;

  private log(hook: string){
    console.log(hook);
  }

  ngOnInit(): void {
    this.log('ngOnInit: Quando o componente é inicializado');
  }
  ngOnChanges(): void{
    this.log('ngOnChanges: Antes do ngOnInit e quando o componente é atualizado');
  }
  ngDoCheck(): void{
    this.log('ngDoCheck: A cada ciclo de verificação de mudanças');
  }
  ngAfterContentInit(): void{
    this.log('ngAfterContentInit: depois de inserir o conteudo externo na view');
  }
  ngAfterContentChecked(): void{
    this.log('ngAfterContentChecked: a cada verificação de conteudo inserido');
  }
  ngAfterViewChecked(): void{
    this.log('ngAfterViewChecked: a cada verificação de conteudo / conteudo filho');
  }
  ngOnDestroy(): void{
    this.log('ngOnDestroy: antes da diretiva/component ser destruído');
  }


}
