import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import Swal from 'sweetalert2';
import { JornadasService } from '../../../services/jornadas.service';

@Component({
  selector: 'app-jornada-agregar',
  templateUrl: './jornada-agregar.component.html',
  styleUrls: ['./jornada-agregar.component.css']
})
export class JornadaAgregarComponent implements OnInit {

  profileForm = new FormGroup({
    jorn: new FormControl(''),
    team: new FormControl(''),
    day: new FormControl(''),
    location: new FormControl(''),
    timer: new FormControl(''),
    local: new FormControl(''),
    userId: new FormControl(''),
    postDate: new FormControl( new Date().toString()),
    uid: new FormControl(''),
  });

  constructor( private sJornadas: JornadasService) { }

  ngOnInit(): void {
  }

  add (){
    this.sJornadas.jornadaAgregar(this.profileForm)
      .then( () => {
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Jornada Agregada',
          showConfirmButton: false,
          timer: 1500
        })
        this.profileForm.reset();
        console.log('agregado')
      })  
      .catch( (err) => { console.log(err)})

  }

}
