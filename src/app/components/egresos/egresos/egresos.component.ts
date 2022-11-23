import { Component, OnInit } from '@angular/core';
import { IngresosService } from 'src/app/services/ingresos.service';

@Component({
  selector: 'app-egresos',
  templateUrl: './egresos.component.html',
  styleUrls: ['./egresos.component.css']
})
export class EgresosComponent implements OnInit {

  items: any;

  constructor(private sIngresos: IngresosService) {
  }

  ngOnInit(): void {
    this.ingresos();
  }

  ingresos() {
    this.sIngresos.egresos().subscribe( ( ing ) => {
      this.items = ing;
    });
  }
}
