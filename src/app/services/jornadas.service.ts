import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class JornadasService {

  constructor( private afs: AngularFirestore ) { }

  jornadaAgregar( record: FormGroup ) {
    let uid = this.afs.createId();
    record.controls['uid'].setValue(uid)
    return this.afs.collection('jornadas').doc(uid).set(record.value);
  }

  jornadas() {
    return this.afs.collection('jornadas', ref => ref.orderBy('team', 'asc')).valueChanges();
  }

  orderJornadas() {
    return this.afs.collection('jornadas', ref => ref.orderBy('jorn', 'desc')).valueChanges();
  }
  
  actualJornadas() {
    return this.afs.collection('jornadas', ref => ref.orderBy('jorn', 'desc').limit(1)).valueChanges();
  }

  jornadaEditar( uid: any, record: any ) {
    this.afs.doc('jornadas/' + uid).update(record);
  }

  jornadaDetallesIngresos(uid: any, jorn: any) {
    console.log(jorn)
    return this.afs.collection('ingresos', ref => ref.where('uidJornada', '==', jorn.toString())).valueChanges();
  }

  jugadores() {
    return this.afs.collection('jugadores', ref => ref.orderBy('numero', 'asc')).valueChanges();
  }

  jornadaDetalleEgresos(uid: any, jorn: any) {
    console.log(jorn)
    return this.afs.collection('egresos', ref => ref.where('uidJornada', '==', jorn.toString())).valueChanges();
  }
}
