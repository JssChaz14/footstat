import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JornadaDetalleComponent } from './jornada-detalle.component';

describe('JornadaDetalleComponent', () => {
  let component: JornadaDetalleComponent;
  let fixture: ComponentFixture<JornadaDetalleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JornadaDetalleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JornadaDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
