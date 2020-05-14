import 'hammerjs';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

import { DemoMaterialModule } from '../demo-material-module';
import { CdkTableModule } from '@angular/cdk/table';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MaterialRoutes } from './material.routing';

import { GridComponent } from './grid/grid.component';
import { ListsComponent } from './lists/lists.component';
import { MenuComponent } from './menu/menu.component';
import { StepperComponent } from './stepper/stepper.component';
import { CrearComponent } from './crear/crear.component';
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {MatProgressBarModule} from "@angular/material/progress-bar";
import {MatExpansionModule} from "@angular/material/expansion";

const myModule = [
  MatProgressSpinnerModule
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(MaterialRoutes),
        DemoMaterialModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
        FlexLayoutModule,
        CdkTableModule,
        myModule,
        MatProgressBarModule,
        MatExpansionModule
    ],
  providers: [],
  declarations: [
    GridComponent,
    ListsComponent,
    MenuComponent,
    CrearComponent,
    StepperComponent,

  ]
})
export class MaterialComponentsModule {}
