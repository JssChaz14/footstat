import { Component, OnInit } from '@angular/core';
import { JornadasService } from '../../services/jornadas.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  jornada: any;
  constructor( private sJornadas: JornadasService ) { }

  ngOnInit(): void {
    this.jornadaActual();
  }

  jornadaActual() {
    this.sJornadas.actualJornadas().subscribe( ( actual: any ) => {
      console.log(actual[0])
      this.jornada = actual[0];
    });
  }



}
