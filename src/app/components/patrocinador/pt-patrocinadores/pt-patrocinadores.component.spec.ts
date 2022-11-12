import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PtPatrocinadoresComponent } from './pt-patrocinadores.component';

describe('PtPatrocinadoresComponent', () => {
  let component: PtPatrocinadoresComponent;
  let fixture: ComponentFixture<PtPatrocinadoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PtPatrocinadoresComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PtPatrocinadoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
