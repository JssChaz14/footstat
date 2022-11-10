import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PtAgregarComponent } from './pt-agregar.component';

describe('PtAgregarComponent', () => {
  let component: PtAgregarComponent;
  let fixture: ComponentFixture<PtAgregarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PtAgregarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PtAgregarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
