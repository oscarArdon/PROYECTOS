import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpleadoDiagnosticosComponent } from './empleado-diagnosticos.component';

describe('EmpleadoDiagnosticosComponent', () => {
  let component: EmpleadoDiagnosticosComponent;
  let fixture: ComponentFixture<EmpleadoDiagnosticosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmpleadoDiagnosticosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpleadoDiagnosticosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
