import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PtEditarComponent } from './pt-editar.component';

describe('PtEditarComponent', () => {
  let component: PtEditarComponent;
  let fixture: ComponentFixture<PtEditarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PtEditarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PtEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
