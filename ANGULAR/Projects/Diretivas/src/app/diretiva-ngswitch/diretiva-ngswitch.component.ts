import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretiva-ngswitch',
  templateUrl: './diretiva-ngswitch.component.html',
  styleUrls: ['./diretiva-ngswitch.component.css']
})
export class DiretivaNgswitchComponent implements OnInit {

  constructor() { }
  abaAtiva = 'Home';

  onclick(){
    alert(this.abaAtiva);
  }

  ngOnInit(): void {
  }

}