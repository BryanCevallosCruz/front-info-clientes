import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RespuestaClienteComponent } from './respuesta-cliente.component';

describe('RespuestaClienteComponent', () => {
  let component: RespuestaClienteComponent;
  let fixture: ComponentFixture<RespuestaClienteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RespuestaClienteComponent]
    });
    fixture = TestBed.createComponent(RespuestaClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
