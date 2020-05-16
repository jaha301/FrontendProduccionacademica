import { Injectable } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection} from "@angular/fire/firestore";
import {Observable} from "rxjs";
import {finalize, map} from 'rxjs/operators';
import {MessageI} from "../Models/message.interface";
import {FileI} from "../Models/file.interface";
import {AngularFireStorage} from "@angular/fire/storage";

@Injectable({
  providedIn: 'root'
})

export class DataDbService {
  private contactCollection: AngularFirestoreCollection<MessageI>;
  private filePath: any;
  private downloadURL: Observable<string>
  uploadPercent: Observable<number>

  constructor(private afs: AngularFirestore, private storage: AngularFireStorage) {
    this.contactCollection = afs.collection<MessageI>('produccion');
  }
  saveMessage(produccion: MessageI):void{

    const productObj = {
      nombreProduccion: produccion.nombreProduccion,
      tipo: produccion.tipo,
      descripcion: produccion.descripcion,
      archivo: this.downloadURL,
      fileRef: this.filePath
    };
    //Editar Produccion tambien
    this.contactCollection.add(productObj);

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
  public preAddProduccion(produccion:MessageI, file: FileI):void{
    this.uploadFile(produccion, file);
  }
  deleteBook(idProduccion: string): void {
    //this.contactCollection = this.afs.collection<MessageI>(` `)
  }
  private uploadFile(produccion: MessageI, file: FileI ) {

    this.filePath = `archivos/${file.name}`;
    const fileRef = this.storage.ref(this.filePath);
    const task = this.storage.upload(this.filePath, file);
    this.uploadPercent = task.percentageChanges();
    task.snapshotChanges()
      .pipe(
        finalize(() => {
          fileRef.getDownloadURL().subscribe(urlArchivo => {
            this.downloadURL = urlArchivo;
            this.saveMessage(produccion);

          })
        })
      ).subscribe();
  }
  }
