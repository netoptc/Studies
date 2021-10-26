import { NgModule } from '@angular/core'; 
import { BrowserModule } from '@angular/platform-browser'; //Prepara a aplicação para ser rododa no Browser
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { MeuPrimeiroComponent } from './meu-primeiro/meu-primeiro.component';
import { MeuSegundoComponent } from './meu-segundo/meu-segundo.component';
import { CursosModule } from './cursos/cursos.module'; 


/*META DADOS
Declaratoins: Listamos todos os componentes, diretives e pipes que queremos utilizar no modulo
Imports: Listamos outros que queremos utilizar 
Providders: Serviços que que serão globais da aplicação 
*/
@NgModule({
  declarations: [ 
    AppComponent,
    MeuPrimeiroComponent,
    MeuSegundoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CursosModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
