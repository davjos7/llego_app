import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http'; // sirve para que tu angular se conecte via api
import { FormsModule} from '@angular/forms'; // sirve para que tu angular se conecte mis capertas creadas aca.


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ListadoComponent } from './listado/listado.component';
import { RegistroComponent } from './registro/registro.component';
import { EventoComponent } from './evento/evento.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ListadoComponent,
    RegistroComponent,
    EventoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
   
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
