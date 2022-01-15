import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DiretivaNgifComponent } from './diretiva-ngif/diretiva-ngif.component';
import { DiretivaNgswitchComponent } from './diretiva-ngswitch/diretiva-ngswitch.component';
import { DiretivaNgforComponent } from './diretiva-ngfor/diretiva-ngfor.component';
import { DiretivaNgclassComponent } from './diretiva-ngclass/diretiva-ngclass.component';
import { DiretivasNgStyleComponent } from './diretivas-ng-style/diretivas-ng-style.component';
import { OperadorElvisComponent } from './operador-elvis/operador-elvis.component';
import { DiretivaNgContentComponent } from './diretiva-ng-content/diretiva-ng-content.component';
import { FundoAmareloDirective } from './custom/fundo-amarelo.directive';
import { DiretivaCustomizadaComponent } from './diretiva-customizada/diretiva-customizada.component';
import { HighlightMouseDirective } from './custom/highlight-mouse.directive';
import { HighlightDirective } from './custom/highlight.directive';
import { NgElseDirective } from './custom/ng-else.directive';

@NgModule({
  declarations: [
    AppComponent,
    DiretivaNgifComponent,
    DiretivaNgswitchComponent,
    DiretivaNgforComponent,
    DiretivaNgclassComponent,
    DiretivasNgStyleComponent,
    OperadorElvisComponent,
    DiretivaNgContentComponent,
    FundoAmareloDirective,
    DiretivaCustomizadaComponent,
    HighlightMouseDirective,
    HighlightDirective,
    NgElseDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
