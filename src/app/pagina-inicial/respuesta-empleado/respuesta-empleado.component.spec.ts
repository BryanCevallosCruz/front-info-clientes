import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RespuestaEmpleadoComponent } from './respuesta-empleado.component';

describe('RespuestaEmpleadoComponent', () => {
  let component: RespuestaEmpleadoComponent;
  let fixture: ComponentFixture<RespuestaEmpleadoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RespuestaEmpleadoComponent]
    });
    fixture = TestBed.createComponent(RespuestaEmpleadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
