import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';
import { ReactiveFormsModule} from '@angular/forms';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './models/navbar/navbar.component';
import { NuevaEditarPersonaComponent } from './models/nueva-editar-persona/nueva-editar-persona.component';
import { VerPersonaComponent } from './models/ver-persona/ver-persona.component';
import { ListPersonaComponent } from './models/list-persona/list-persona.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    NuevaEditarPersonaComponent,
    VerPersonaComponent,
    ListPersonaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
