/*Importando a o mudolo core para poder usar o Component*/
import { Component } from "@angular/core";



/*Estou usando um decorator para passsar para o compilador do TypeScript que essa classe é um component do Angular2 */
@Component({
    /*O Seclector é usado paara criar tag html customizado*/
    selector: 'meu-primeiro-component', 
    template:`
        <p>Meu Primeiro component com Angular 2!</p>
    `
})
/*O export é usado para expor a class outros arquivos, obs: tenho que adicionar ela ao app.modulo.ts */
export class MeuPrimeiroComponent{}