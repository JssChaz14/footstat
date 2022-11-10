import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JornadaAgregarComponent } from './jornada-agregar.component';

describe('JornadaAgregarComponent', () => {
  let component: JornadaAgregarComponent;
  let fixture: ComponentFixture<JornadaAgregarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JornadaAgregarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JornadaAgregarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
