import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarCitasComponent } from './editar-citas.component';

describe('EditarCitasComponent', () => {
  let component: EditarCitasComponent;
  let fixture: ComponentFixture<EditarCitasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarCitasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarCitasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
