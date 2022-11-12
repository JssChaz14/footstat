import { Component, OnInit } from '@angular/core';
import { IngresosService } from '../../../services/ingresos.service';

@Component({
  selector: 'app-pt-patrocinadores',
  templateUrl: './pt-patrocinadores.component.html',
  styleUrls: ['./pt-patrocinadores.component.css']
})
export class PtPatrocinadoresComponent implements OnInit {
  listaPatrocinadores: any;

  constructor( private sIngresos: IngresosService) { }

  ngOnInit(): void {
    this.patrocinadores();
  }

  patrocinadores() {
    this.sIngresos.getPatrocinadores().subscribe( (pato) => {
      console.log(pato)
      this.listaPatrocinadores = pato;
    })
  }

}
