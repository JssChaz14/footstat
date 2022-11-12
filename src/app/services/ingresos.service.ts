import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { serverTimestamp } from "firebase/firestore";

@Injectable({
  providedIn: 'root'
})
export class IngresosService {

  constructor( private afs: AngularFirestore) { }

  getPatrocinadores() {
    return this.afs.collection('patrocinadores').valueChanges()
  }

  addPatrocinadores( patrocinador: any ) {
    console.log(patrocinador)

    let uid = this.afs.createId();
    console.log(uid)
    patrocinador['uid'] =  uid;
    console.log(patrocinador)
    return this.afs.collection('patrocinadores').doc(patrocinador.uid).set(patrocinador, { merge: true });

  }

  aportes( patrocinador: any, monto: any ) {
    return this.afs.collection('patrocinadores').doc(patrocinador.uid).update({'uid': patrocinador, 'aportes': monto})
  }

  addIngreso( alumno: any ) {
    let uid = this.afs.createId();
    alumno['uid'] = uid;
    return this.afs.collection('ingresos').doc(alumno.uid).set(alumno, { merge: true });
  }

  ingresos() {
    return this.afs.collection('ingresos').valueChanges()
  }

  getIngreso( ingreso: any ) {
    return this.afs.collection('ingresos', ref => ref.where('uid', '==', ingreso).limit(1)).valueChanges()
  }

  updateIngreso( alumno: any ) {
    return this.afs.collection('ingresos').doc(alumno.uid).update(alumno)
  }
}
