import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IngresosAgregarComponent } from './ingresos-agregar.component';

describe('IngresosAgregarComponent', () => {
  let component: IngresosAgregarComponent;
  let fixture: ComponentFixture<IngresosAgregarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IngresosAgregarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IngresosAgregarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
