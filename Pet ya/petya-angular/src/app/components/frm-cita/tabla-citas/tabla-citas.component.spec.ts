import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaCitasComponent } from './tabla-citas.component';

describe('TablaCitasComponent', () => {
  let component: TablaCitasComponent;
  let fixture: ComponentFixture<TablaCitasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TablaCitasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TablaCitasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
