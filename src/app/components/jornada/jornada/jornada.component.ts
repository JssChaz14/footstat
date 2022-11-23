import { Component, OnInit } from '@angular/core';

import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { JornadasService } from '../../../services/jornadas.service';


@Component({
  selector: 'app-jornada',
  templateUrl: './jornada.component.html',
  styleUrls: ['./jornada.component.css']
})
export class JornadaComponent implements OnInit {

  private itemsCollection: AngularFirestoreCollection<any>;
  items: Observable<any[]>;
  jornadas: any;

  constructor(private afs: AngularFirestore, private sJornadas: JornadasService) {
    this.itemsCollection = afs.collection<any>('jornadas');
    this.items = this.itemsCollection.valueChanges();
  }

  ngOnInit(): void {
    this.jornadasOrdenadas()
  }

  jornadasOrdenadas() {
    this.sJornadas.orderJornadas().subscribe( (jorn: any) => {
      this.jornadas = jorn;
      console.log(this.jornadas)
    })
  }

}
