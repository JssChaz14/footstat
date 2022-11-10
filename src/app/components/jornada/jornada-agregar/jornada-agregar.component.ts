import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-jornada-agregar',
  templateUrl: './jornada-agregar.component.html',
  styleUrls: ['./jornada-agregar.component.css']
})
export class JornadaAgregarComponent implements OnInit {

  profileForm = new FormGroup({
    jorn: new FormControl(''),
    team: new FormControl(''),
  });

  constructor() { }

  ngOnInit(): void {
  }

  add (){
    console.log(this.profileForm.value)
  }

}
