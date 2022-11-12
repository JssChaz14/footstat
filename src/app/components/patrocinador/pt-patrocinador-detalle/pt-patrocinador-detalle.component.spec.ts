import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PtPatrocinadorDetalleComponent } from './pt-patrocinador-detalle.component';

describe('PtPatrocinadorDetalleComponent', () => {
  let component: PtPatrocinadorDetalleComponent;
  let fixture: ComponentFixture<PtPatrocinadorDetalleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PtPatrocinadorDetalleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PtPatrocinadorDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
