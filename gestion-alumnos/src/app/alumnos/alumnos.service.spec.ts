import { TestBed } from '@angular/core/testing';
import { AlumnosService } from './alumnos.service';

describe('AlumnosService', () => {
  let service: AlumnosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AlumnosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return an array of alumnos', () => {
    const alumnos = service.getAlumnos();
    expect(alumnos).toBeTruthy();
    expect(Array.isArray(alumnos)).toBe(true);
  });

  // Agregar más pruebas según sea necesario
});

