import { Routes } from '@angular/router';
import { GridComponent } from './grid/grid.component';
import { ListsComponent } from './lists/lists.component';
import { MenuComponent } from './menu/menu.component';
import { CrearComponent } from './crear/crear.component';
import { StepperComponent } from './stepper/stepper.component';

export const MaterialRoutes: Routes = [
  {
    path: 'button',
  },
  {
    path: 'grid',
    component: GridComponent
  },
  {
    path: 'lists',
    component: ListsComponent
  },
  {
    path: 'menu',
    component: MenuComponent
  },
  {
    path: 'crear',
    component: CrearComponent
  },
  {
    path: 'stepper',
    component: StepperComponent
  },
 



];
