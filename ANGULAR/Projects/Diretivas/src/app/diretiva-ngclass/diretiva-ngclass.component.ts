import { Component, OnInit } from '@angular/core';
import { BooleanLiteral } from 'typescript';

@Component({
  selector: 'app-diretiva-ngclass',
  templateUrl: './diretiva-ngclass.component.html',
  styleUrls: ['./diretiva-ngclass.component.css']
})
export class DiretivaNgclassComponent implements OnInit {

  activeFavoriteIcon: Boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  onClick(){
    this.activeFavoriteIcon = !this.activeFavoriteIcon;
  }

}
