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
  itemsEgresos: any;
  total: any;
  totalEgreso: any;

  team: any;
  
  constructor( private sJornadas: JornadasService ) { }

  ngOnInit(): void {
    this.consultarJornadas();
  }

  consultarJornadas() {
    this.sJornadas.orderJornadas().subscribe( ( jor: any) => {
      this.jornadas = jor;
      console.log(jor)
    })
  }

  ingresosVSegresos( equipo: string, jornada: string) {
    console.log(equipo)
    console.log(jornada)

    this.isDetail = true;
    this.team = equipo;

    this.sJornadas.jornadaDetallesIngresos(this.team, jornada).subscribe( (datos) => {
      this.total = 0
       datos.forEach((element: any) => {
         console.log(element.cantidad)
         console.log(this.total)
         this.total += Number(element.cantidad);
       });
       this.items = datos;
     })

     this.sJornadas.jornadaDetalleEgresos(this.team, jornada).subscribe( (datos) => {
      this.totalEgreso = 0
       datos.forEach((element: any) => {
         this.totalEgreso += Number(element.cantidad); 
       });
       console.log(datos)
       this.itemsEgresos = datos;
     })

  }

}
