import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { IngresosService } from '../../../services/ingresos.service';

@Component({
  selector: 'app-ingresos',
  templateUrl: './ingresos.component.html',
  styleUrls: ['./ingresos.component.css']
})
export class IngresosComponent implements OnInit {

  items: any;

  constructor(private sIngresos: IngresosService) {
  }

  ngOnInit(): void {
    this.ingresos();
  }

  ingresos() {
    this.sIngresos.ingresos().subscribe( ( ing ) => {
      this.items = ing;
    });
  }

}
