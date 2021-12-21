import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpleadoCitasComponent } from './empleado-citas.component';

describe('EmpleadoCitasComponent', () => {
  let component: EmpleadoCitasComponent;
  let fixture: ComponentFixture<EmpleadoCitasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmpleadoCitasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpleadoCitasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
