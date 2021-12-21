import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlHorariosComponent } from './control-horarios.component';

describe('ControlHorariosComponent', () => {
  let component: ControlHorariosComponent;
  let fixture: ComponentFixture<ControlHorariosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ControlHorariosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ControlHorariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
