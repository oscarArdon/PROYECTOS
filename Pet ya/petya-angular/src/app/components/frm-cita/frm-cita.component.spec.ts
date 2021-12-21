import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FrmCitaComponent } from './frm-cita.component';

describe('FrmCitaComponent', () => {
  let component: FrmCitaComponent;
  let fixture: ComponentFixture<FrmCitaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FrmCitaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FrmCitaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
