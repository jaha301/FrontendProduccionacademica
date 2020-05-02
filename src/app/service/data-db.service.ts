import { Injectable } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection} from "@angular/fire/firestore";
import {Observable} from "rxjs";
import {map} from 'rxjs/operators';
import {MessageI} from "../Models/message.interface";

@Injectable({
  providedIn: 'root'
})

export class DataDbService {
  private contactCollection: AngularFirestoreCollection<MessageI>;

  constructor(private afs: AngularFirestore) {
    this.contactCollection = afs.collection<MessageI>('produccion');
  }
  saveMessage(newContact: MessageI):void{
    this.contactCollection.add(newContact);
  }
  public getAllProduccion():Observable<MessageI[]>{
    return this.afs
      .collection('produccion')
      .snapshotChanges()
      .pipe(
          map(actions =>
      actions.map(a => {
    const data = a.payload.doc.data() as MessageI;
    const id = a.payload.doc.id;
    return {id, ...data};
    })
          ));
  }
}
