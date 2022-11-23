import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { JornadasService } from '../../../services/jornadas.service';
import { IngresosService } from '../../../services/ingresos.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-egresos-agregar',
  templateUrl: './egresos-agregar.component.html',
  styleUrls: ['./egresos-agregar.component.css']
})
export class EgresosAgregarComponent implements OnInit {

  jornadas: any;
  jugadores: any;

  egresosForm = new FormGroup({
    uidJugador: new FormControl(''),
    uidJornada: new FormControl(''),
    cantidad: new FormControl(''),
    tipo: new FormControl(''),
    postDate: new FormControl( new Date().toString()),
    updatedAt: new  FormControl(''),
    uid: new  FormControl(''),
    comentarios: new  FormControl(''),
  });


  constructor( private sJornadas: JornadasService, private sIngresos: IngresosService) { }

  ngOnInit(): void {
    console.log(this.jornadas)

    this.consultarJornadas();
    this.consultarJugadores();
  }

  agregarEgreso() {
    this.sIngresos.addEgreso(this.egresosForm.value)
      .then( () => { 
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Egreso Agregado',
          showConfirmButton: false,
          timer: 1500
        })
        this.egresosForm.reset();
      })
      .catch( (err) => { console.log(err)})
    console.log(this.egresosForm.value)
  }

  consultarJornadas() {
    this.sJornadas.jornadas().subscribe( ( jor: any) => {
      this.jornadas = jor;
      console.log(jor)
    })
  }

  consultarJugadores() {
    this.sJornadas.jugadores().subscribe( ( jor: any) => {
      this.jugadores = jor;
      console.log(jor)
    })
  }

}
