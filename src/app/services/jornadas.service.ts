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
    return this.afs.collection('jornadas').valueChanges();
  }


  jornadaEditar( uid: any, record: any ) {
    this.afs.doc('jornadas/' + uid).update(record);
  }
}
