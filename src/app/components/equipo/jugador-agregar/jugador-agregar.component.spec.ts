import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JugadorAgregarComponent } from './jugador-agregar.component';

describe('JugadorAgregarComponent', () => {
  let component: JugadorAgregarComponent;
  let fixture: ComponentFixture<JugadorAgregarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JugadorAgregarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JugadorAgregarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
