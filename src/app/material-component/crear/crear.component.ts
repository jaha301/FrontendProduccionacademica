import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {DataDbService} from "../../service/data-db.service";
import {MessageI} from "../../Models/message.interface";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AngularFireStorage} from "@angular/fire/storage";
import {delay, finalize} from "rxjs/operators";
import {Observable} from "rxjs";
import { Location } from '@angular/common';

@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.scss']
})
export class CrearComponent implements OnInit{
  private archi:any;



  num: number = 0;
  createFormGroup(){
    return new FormGroup({
      nombreProduccion: new FormControl('',[Validators.required]),
      tipo: new FormControl ('', [Validators.required]),
      descripcion: new FormControl('', [Validators.required, Validators.minLength(5)]),
      archivo: new FormControl('', [Validators.required])
    });
      }
      crearForm: FormGroup;
  constructor(private dbData: DataDbService, private storageProduccion: AngularFireStorage,  private locacion: Location) {
     this.crearForm = this.createFormGroup();
  }
  @ViewChild('fileArchivo') inputUrlFile: ElementRef;

  urlFile: Observable<string>;
  ngOnInit(){}

  onResetForm(){
    this.crearForm.reset();
  }
  onSavedForm()
  {/* const newProduccion = {
      nombreProduccion: 'arley',
      tipo: 'investigacion',
      descripcion: 'Ole ole lo caracole'} */
    if(this.crearForm.valid) {
      this.dbData.preAddProduccion(this.crearForm.value, this.archi);
      this.crearForm.reset();
      //this.locacion.back();
         }
    else {

    }

  }

  handleArchivo(event:any):void{
    this.archi = event.target.files[0];

  }
  get nombreProduccion() { return this.crearForm.get ('nombreProduccion');}
  get tipo() { return this.crearForm.get ('tipo');}
  get descripcion() { return this.crearForm.get ('descripcion');}





}
