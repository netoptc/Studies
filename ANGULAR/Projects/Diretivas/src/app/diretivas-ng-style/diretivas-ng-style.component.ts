import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretivas-ng-style',
  templateUrl: './diretivas-ng-style.component.html',
  styleUrls: ['./diretivas-ng-style.component.css']
})
export class DiretivasNgStyleComponent implements OnInit {

  activeButton: boolean =false;
  tamanhoFonte:any = 12;

  constructor() { }

  ngOnInit(): void {
  }

  onClick(){
    this.activeButton = !this.activeButton;
  }
}
