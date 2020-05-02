import {Component, OnInit} from '@angular/core';
import {DataDbService} from "../../service/data-db.service";
import {MessageI} from "../../Models/message.interface";
import {Observable} from "rxjs";

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.scss']
})

export class ListsComponent implements OnInit{
  public produccion: {
    id: String;
    nombreProduccion: String;
    tipo: String;
    descripcion: string;
  }

  public produccion$: Observable<MessageI[]>;
  constructor(private dbData: DataDbService) {

  }
  ngOnInit(){
    //this.dbData.getAllProduccion().subscribe(res=> console.log('produccion', res));
    this.produccion$ = this.dbData.getAllProduccion();
  }
}
