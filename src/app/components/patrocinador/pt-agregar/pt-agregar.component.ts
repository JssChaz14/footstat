import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import Swal from 'sweetalert2';
import { IngresosService } from '../../../services/ingresos.service';

@Component({
  selector: 'app-pt-agregar',
  templateUrl: './pt-agregar.component.html',
  styleUrls: ['./pt-agregar.component.css']
})
export class PtAgregarComponent implements OnInit {

    patrocinadorForm = new FormGroup({
      nombre: new FormControl(''),
      tipo: new FormControl(''),
      frecuencia: new FormControl(''),
      activo: new FormControl(''),
      postDate: new FormControl( new Date().toString()),
      cantidad: new FormControl(''),
      aportes: new  FormControl(''),
      updatedAt: new  FormControl(''),
      uid: new  FormControl(''),
  });

  constructor( private sIngresos: IngresosService) { }

  ngOnInit(): void {
  }

  add (){
    console.log(this.patrocinadorForm.value)
    this.sIngresos.addPatrocinadores(this.patrocinadorForm.value)
      .then( () => {
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Patrocinador Agregada',
          showConfirmButton: false,
          timer: 1500
        })
        this.patrocinadorForm.reset();
        console.log('agregado patrocinador')
      })  
      .catch( (err) => { console.log(err)})

  }

}
