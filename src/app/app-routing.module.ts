import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NuevaEditarPersonaComponent } from './models/nueva-editar-persona/nueva-editar-persona.component';
import { VerPersonaComponent } from './models/ver-persona/ver-persona.component';
import { ListPersonaComponent } from './models/list-persona/list-persona.component';

const routes: Routes = [

  {path: 'agregar', component: NuevaEditarPersonaComponent},
  {path: 'editar/:id', component: NuevaEditarPersonaComponent},
  {path: 'ver/:id', component: VerPersonaComponent},
  {path: '', component: ListPersonaComponent, pathMatch: 'full'},
  {path: '**', redirectTo: '/'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports:
  [RouterModule],
})
export class AppRoutingModule { }
