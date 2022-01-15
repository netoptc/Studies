import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'meuPrimeiroPipe'
})
export class MeuPrimeiroPipePipe implements PipeTransform {

  transform(value: any, ...args: any): any {
    let palavras:string = value.split(' ');
    let result:string = '';

    for(let palavra of palavras){
      result += palavra.toLocaleLowerCase() + ' ';
    }
  
    return result.toLocaleLowerCase();
  }

}
