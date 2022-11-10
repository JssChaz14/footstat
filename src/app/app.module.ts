import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { JornadaComponent } from './components/jornada/jornada/jornada.component';
import { JornadaAgregarComponent } from './components/jornada/jornada-agregar/jornada-agregar.component';
import { JornadaEditarComponent } from './components/jornada/jornada-editar/jornada-editar.component';
import { JugadoresComponent } from './components/equipo/jugadores/jugadores.component';
import { JugadorAgregarComponent } from './components/equipo/jugador-agregar/jugador-agregar.component';
import { JugadorEditarComponent } from './components/equipo/jugador-editar/jugador-editar.component';
import { AdminComponent } from './components/administracion/admin/admin.component';
import { PtAgregarComponent } from './components/patrocinador/pt-agregar/pt-agregar.component';
import { PtEditarComponent } from './components/patrocinador/pt-editar/pt-editar.component';
import { PagosComponent } from './components/nomina/pagos/pagos.component';
import { IngresosAgregarComponent } from './components/ingresos/ingresos-agregar/ingresos-agregar.component';
import { IngresosComponent } from './components/ingresos/ingresos/ingresos.component';
import { EgresosComponent } from './components/egresos/egresos/egresos.component';
import { EgresosAgregarComponent } from './components/egresos/egresos-agregar/egresos-agregar.component';
import { JugadorDetalleComponent } from './components/equipo/jugador-detalle/jugador-detalle.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    JornadaComponent,
    JornadaAgregarComponent,
    JornadaEditarComponent,
    JugadoresComponent,
    JugadorAgregarComponent,
    JugadorEditarComponent,
    AdminComponent,
    PtAgregarComponent,
    PtEditarComponent,
    PagosComponent,
    IngresosAgregarComponent,
    IngresosComponent,
    EgresosComponent,
    EgresosAgregarComponent,
    JugadorDetalleComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
