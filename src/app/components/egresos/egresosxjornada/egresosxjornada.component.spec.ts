import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EgresosxjornadaComponent } from './egresosxjornada.component';

describe('EgresosxjornadaComponent', () => {
  let component: EgresosxjornadaComponent;
  let fixture: ComponentFixture<EgresosxjornadaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EgresosxjornadaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EgresosxjornadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
