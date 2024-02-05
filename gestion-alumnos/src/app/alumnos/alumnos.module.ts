import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class AlumnosModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaAlumnosComponent } from './lista-alumnos/lista-alumnos.component';
import { AbmAlumnosComponent } from './abm-alumnos/abm-alumnos.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CustomDirective } from './custom.directive';
import { CustomPipe } from './custom.pipe';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    ListaAlumnosComponent,
    AbmAlumnosComponent,
    CustomDirective,
    CustomPipe
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    MatInputModule,
    MatButtonModule
  ],
  exports: [
    ListaAlumnosComponent,
    AbmAlumnosComponent
  ]
})
export class AlumnosModule { }

