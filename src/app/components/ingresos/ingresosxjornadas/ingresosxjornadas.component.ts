import { Component, OnInit } from '@angular/core';
import { JornadasService } from 'src/app/services/jornadas.service';

@Component({
  selector: 'app-ingresosxjornadas',
  templateUrl: './ingresosxjornadas.component.html',
  styleUrls: ['./ingresosxjornadas.component.css']
})
export class IngresosxjornadasComponent implements OnInit {
  jornadas: any;
  isDetail = false;
  items:any;
  total: any;
  team: any;
  
  constructor( private sJornadas: JornadasService ) { }

  ngOnInit(): void {
    this.consultarJornadas();
  }

  consultarJornadas() {
    this.sJornadas.jornadas().subscribe( ( jor: any) => {
      this.jornadas = jor;
      console.log(jor)
    })
  }

  detalle( team: any, jorn: any ) {
    this.isDetail = true;
    this.team = team;
    
    this.sJornadas.jornadaDetallesIngresos(team, jorn).subscribe( (datos) => {
     this.total = 0
      datos.forEach((element: any) => {
        console.log(element.cantidad)
        console.log(this.total)
        this.total += Number(element.cantidad);
        console.log(this.total)

      });

      console.log(datos)
      this.items = datos;
    })
  }

}
