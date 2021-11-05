import { Injectable } from '@angular/core';

@Injectable({ // Decoraator usado para injetar a classe em outra
  providedIn: 'root'
})
export class CursosService {

  constructor() {}
  getCursos(){
    return ['Java', 'Ext JS', 'Angular'];
  }
}
