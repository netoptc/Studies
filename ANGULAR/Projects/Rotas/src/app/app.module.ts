import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app.routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CursosModule } from './cursos/cursos.module';
import { AlunosModule } from './alunos/alunos.module';
import { LoginModule } from './login/login.module';
import { LoginService } from './login/login.service';
import { AuthGuards } from './guards/auth.guards';
import { CursosGuards } from './guards/cursos.guards';
import { AlunosGuards } from './guards/alunos.guards';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CursosModule,
    AlunosModule,
    LoginModule,
    AppRoutingModule,
  ],
  providers: [
    LoginService,
    AuthGuards,
    CursosGuards,
    AlunosGuards
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
