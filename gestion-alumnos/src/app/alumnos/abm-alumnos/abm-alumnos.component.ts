import { Component } from '@angular/core';

@Component({
  selector: 'app-abm-alumnos',
  standalone: true,
  imports: [],
  templateUrl: './abm-alumnos.component.html',
  styleUrl: './abm-alumnos.component.css'
})
export class AbmAlumnosComponent {

}
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-abm-alumnos',
  templateUrl: './abm-alumnos.component.html',
  styleUrls: ['./abm-alumnos.component.css']
})
export class AbmAlumnosComponent implements OnInit {
  alumnoForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.alumnoForm = this.fb.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      // Otros campos necesarios
    });
  }

  guardarAlumno() {
    // Lógica para guardar el alumno
  }
}
import { Component } from '@angular/core';

@Component({
  selector: 'app-lista-alumnos',
  templateUrl: './lista-alumnos.component.html',
  styleUrls: ['./lista-alumnos.component.css']
})
export class ListaAlumnosComponent {
  alumnos = [
    { nombre: 'Juan', apellido: 'Perez' },
    { nombre: 'Maria', apellido: 'Gomez' },
    // Otros datos
  ];
}
