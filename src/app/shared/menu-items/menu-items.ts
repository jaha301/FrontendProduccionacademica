import { Injectable } from '@angular/core';

export interface Menu {
  state: string;
  name: string;
  type: string;
  icon: string;
}

const MENUITEMS = [
 // { state: 'menu', type: 'link', name: 'Consultar', icon: 'view_list' },
 // { state: 'crear', type: 'link', name: 'Crear Publicación', icon: 'view_list' },
  { state: 'lists', type: 'link', name: 'Mis Producciones', icon: 'view_list' },
  //{ state: 'stepper', type: 'link', name: 'Modificar', icon: 'view_list' },
  { state: 'dashboard', name: 'Mis Estadísticas', type: 'link', icon: 'av_timer' },

];

@Injectable()
export class MenuItems {
  getMenuitem(): Menu[] {
    return MENUITEMS;
  }
}
