import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IngresosxjornadasComponent } from './ingresosxjornadas.component';

describe('IngresosxjornadasComponent', () => {
  let component: IngresosxjornadasComponent;
  let fixture: ComponentFixture<IngresosxjornadasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IngresosxjornadasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IngresosxjornadasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
