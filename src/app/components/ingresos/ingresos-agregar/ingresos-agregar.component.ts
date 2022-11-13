import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import Swal from 'sweetalert2';
import { IngresosService } from '../../../services/ingresos.service';
import { JornadasService } from '../../../services/jornadas.service';

@Component({
  selector: 'app-ingresos-agregar',
  templateUrl: './ingresos-agregar.component.html',
  styleUrls: ['./ingresos-agregar.component.css']
})
export class IngresosAgregarComponent implements OnInit {

  ingresosForm = new FormGroup({
    uidPatrocinador: new FormControl(''),
    uidJornada: new FormControl(''),
    cantidad: new FormControl(''),
    postDate: new FormControl( new Date().toString()),
    updatedAt: new  FormControl(''),
    uid: new  FormControl(''),
  });

  jornadas:any;
  patrocinadores:any;

  constructor( private sServicios: IngresosService, private sJornadas: JornadasService) { }

  ngOnInit(): void {
    this.consultarJornadas();
    this.consultarPatrocinadores();
  }

  agregarIngreso() {
    this.sServicios.addIngreso(this.ingresosForm.value)
      .then( () => { 
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Jornada Agregada',
          showConfirmButton: false,
          timer: 1500
        })
        this.ingresosForm.reset();
      })
      .catch( (err) => { console.log(err)})
    console.log(this.ingresosForm.value)
  }

  consultarJornadas() {
    this.sJornadas.jornadas().subscribe( ( jor: any) => {
      this.jornadas = jor;
      console.log(jor)
    })
  }

  consultarPatrocinadores() {
    this.sServicios.getPatrocinadores().subscribe( ( patros: any) => {
      this.patrocinadores = patros;
      console.log(patros)
    })
  }

}
