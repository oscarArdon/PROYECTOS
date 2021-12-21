import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpleadoHorariosComponent } from './empleado-horarios.component';

describe('EmpleadoHorariosComponent', () => {
  let component: EmpleadoHorariosComponent;
  let fixture: ComponentFixture<EmpleadoHorariosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmpleadoHorariosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpleadoHorariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
