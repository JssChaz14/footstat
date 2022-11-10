import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EgresosAgregarComponent } from './egresos-agregar.component';

describe('EgresosAgregarComponent', () => {
  let component: EgresosAgregarComponent;
  let fixture: ComponentFixture<EgresosAgregarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EgresosAgregarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EgresosAgregarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
