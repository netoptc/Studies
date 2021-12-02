import { NgModule } from '@angular/core'; 
import { BrowserModule } from '@angular/platform-browser'; //Prepara a aplicação para ser rododa no Browser
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MeuPrimeiroComponent } from './meu-primeiro/meu-primeiro.component';
import { MeuSegundoComponent } from './meu-segundo/meu-segundo.component';
import { CursosModule } from './cursos/cursos.module';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ImputPropertyComponent } from './imput-property/imput-property.component';
import { OutputPropertyComponent } from './output-property/output-property.component';
import { CicloComponent } from './ciclo/ciclo.component'; 


/*META DADOS
Declaratoins: Listamos todos os componentes, diretives e pipes que queremos utilizar no modulo
Imports: Listamos outros modulos que queremos utilizar 
Providders: Serviços que que serão globais da aplicação 
*/
@NgModule({
  declarations: [ 
    AppComponent,
    MeuPrimeiroComponent,
    MeuSegundoComponent,
    DataBindingComponent,
    ImputPropertyComponent,
    OutputPropertyComponent,
    CicloComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CursosModule,
    NgbModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
