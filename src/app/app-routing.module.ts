import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { JugadoresComponent } from './components/equipo/jugadores/jugadores.component';
import { JornadaComponent } from './components/jornada/jornada/jornada.component';
import { JugadorEditarComponent } from './components/equipo/jugador-editar/jugador-editar.component';
import { HomeComponent } from './components/home/home.component';
import { JornadaAgregarComponent } from './components/jornada/jornada-agregar/jornada-agregar.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },

  { path: 'jugadores', component: JugadoresComponent },
  { path: 'jugador/:id', component: JugadorEditarComponent },


  { path: 'jornadas', component: JornadaComponent },
  { path: 'jornada/agregar', component: JornadaAgregarComponent },


  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
