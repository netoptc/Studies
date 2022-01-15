import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExemplosPipesComponent } from './exemplos-pipes/exemplos-pipes.component';
import { MeuPrimeiroPipePipe } from './meu-primeiro-pipe.pipe';
import { FiltroArrayPipe } from './filtro-array.pipe';
import { FiltroArrayPipeInpuroPipe } from './filtro-array-pipe-inpuro.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ExemplosPipesComponent,
    MeuPrimeiroPipePipe,
    FiltroArrayPipe,
    FiltroArrayPipeInpuroPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
