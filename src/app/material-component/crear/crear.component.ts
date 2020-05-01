import {Component, OnInit} from '@angular/core';
import {DataDbService} from "../../service/data-db.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.scss']
})
export class CrearComponent implements OnInit{

  createFormGroup(){
    return new FormGroup({
      nombreProduccion: new FormControl('',[Validators.required]),
      tipo: new FormControl ('', [Validators.required]),
      descripcion: new FormControl('', [Validators.required, Validators.minLength(5)])
    });
      }
      crearForm: FormGroup;
  constructor(private dbData: DataDbService) {
  this.crearForm = this.createFormGroup();
  }
  ngOnInit(){}

  onResetForm(){
    this.crearForm.reset();
  }
  onSavedForm()
  {


   /* const newProduccion = {
      nombreProduccion: 'arley',
      tipo: 'investigacion',
      descripcion: 'Ole ole lo caracole'} */
    if(this.crearForm.valid) {
      this.dbData.saveMessage(this.crearForm.value);
      this.crearForm.reset();
      console.log('Guardado');
      }
    else {
      console.log('Datos no validos');
    }
  }
  get nombreProduccion() { return this.crearForm.get ('nombreProduccion');}
  get tipo() { return this.crearForm.get ('tipo');}
  get descripcion() { return this.crearForm.get ('descripcion');}





}
