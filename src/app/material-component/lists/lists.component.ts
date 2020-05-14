import {Component, OnInit, ElementRef, ViewChild} from '@angular/core';
import {DataDbService} from "../../service/data-db.service";
import {MessageI} from "../../Models/message.interface";
import {Observable} from "rxjs";
import {AngularFirestore} from "@angular/fire/firestore";


@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.scss']

})

export class ListsComponent implements OnInit{
  panelOpenState = false;
  step = 0;
  setStep(index: number) {
    this.step = index;
  }
  nextStep() {
    this.step++;
  }
  prevStep() {
    this.step--;
  }

  public produccion: {
    nombreProduccion: String;
    tipo: String;
    descripcion: string;
    archivo: any;
    fileRef: string;

  }

  public produccion$: Observable<MessageI[]>;
  constructor(private dbData: DataDbService,  ) {

  }
  ngOnInit(){
    //this.dbData.getAllProduccion().subscribe(res=> console.log('produccion', res));
    this.produccion$ = this.dbData.getAllProduccion();

  }



}
