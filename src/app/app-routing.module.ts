import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { JugadoresComponent } from './components/equipo/jugadores/jugadores.component';
import { JornadaComponent } from './components/jornada/jornada/jornada.component';
import { JugadorEditarComponent } from './components/equipo/jugador-editar/jugador-editar.component';
import { HomeComponent } from './components/home/home.component';
import { JornadaAgregarComponent } from './components/jornada/jornada-agregar/jornada-agregar.component';
import { JugadorAgregarComponent } from './components/equipo/jugador-agregar/jugador-agregar.component';
import { JornadaDetalleComponent } from './components/jornada/jornada-detalle/jornada-detalle.component';
import { PtPatrocinadoresComponent } from './components/patrocinador/pt-patrocinadores/pt-patrocinadores.component';
import { PtPatrocinadorDetalleComponent } from './components/patrocinador/pt-patrocinador-detalle/pt-patrocinador-detalle.component';
import { PtAgregarComponent } from './components/patrocinador/pt-agregar/pt-agregar.component';
import { IngresosComponent } from './components/ingresos/ingresos/ingresos.component';
import { IngresosAgregarComponent } from './components/ingresos/ingresos-agregar/ingresos-agregar.component';
import { EgresosComponent } from './components/egresos/egresos/egresos.component';
import { EgresosAgregarComponent } from './components/egresos/egresos-agregar/egresos-agregar.component';
import { IngresosxjornadasComponent } from './components/ingresos/ingresosxjornadas/ingresosxjornadas.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },

  { path: 'jugadores', component: JugadoresComponent },
  { path: 'jugador/agregar', component: JugadorAgregarComponent },
  { path: 'jugador/:id', component: JugadorEditarComponent },

  { path: 'jornadas', component: JornadaComponent },
  { path: 'jornada/agregar', component: JornadaAgregarComponent },
  { path: 'jornada/detalle', component: JornadaDetalleComponent },

  { path: 'patrocinadores', component: PtPatrocinadoresComponent  },
  { path: 'patrocinador/:id', component: PtPatrocinadoresComponent  },
  { path: 'patrocinador/detalle', component: PtPatrocinadorDetalleComponent },
  { path: 'patrocinador-agregar', component: PtAgregarComponent },

  { path: 'ingresos', component: IngresosComponent },
  { path: 'ingresos-detallados', component: IngresosxjornadasComponent },

  { path: 'ingresos-agregar', component: IngresosAgregarComponent },

  { path: 'egresos', component: EgresosComponent },
  { path: 'egresos-agregar', component: EgresosAgregarComponent },

  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
