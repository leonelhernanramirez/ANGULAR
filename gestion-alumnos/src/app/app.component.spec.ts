import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { AbmAlumnosComponent } from './abm-alumnos.component';

describe('AbmAlumnosComponent', () => {
  let component: AbmAlumnosComponent;
  let fixture: ComponentFixture<AbmAlumnosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AbmAlumnosComponent ],
      imports: [ ReactiveFormsModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AbmAlumnosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('form should be invalid when empty', () => {
    expect(component.alumnoForm.valid).toBeFalsy();
  });

  it('form should be valid with correct input', () => {
    const nombre = component.alumnoForm.controls['nombre'];
    nombre.setValue('Juan');
    const apellido = component.alumnoForm.controls['apellido'];
    apellido.setValue('Perez');
    expect(component.alumnoForm.valid).toBeTruthy();
  });

  // Agregar más pruebas según sea necesario
});

