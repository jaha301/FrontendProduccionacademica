import { Injectable } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection} from "@angular/fire/firestore";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DataDbService {
  private contactCollection: AngularFirestoreCollection<any>;

  constructor(private afs: AngularFirestore) {
    this.contactCollection = afs.collection<any>('produccion');
  }
  saveMessage(newContact: any):void{
    this.contactCollection.add(newContact);
  }
}
