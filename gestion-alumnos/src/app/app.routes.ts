import { Routes } from '@angular/router';

export const routes: Routes = [];

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaAlumnosComponent } from './alumnos/lista-alumnos/lista-alumnos.component';
import { AbmAlumnosComponent } from './alumnos/abm-alumnos/abm-alumnos.component';

const routes: Routes = [
  { path: 'lista-alumnos', component: ListaAlumnosComponent },
  { path: 'abm-alumnos', component: AbmAlumnosComponent },
  // Otros componentes/rutas
  { path: '', redirectTo: '/lista-alumnos', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
