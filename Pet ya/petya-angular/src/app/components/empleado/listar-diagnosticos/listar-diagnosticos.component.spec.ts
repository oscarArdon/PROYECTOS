import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarDiagnosticosComponent } from './listar-diagnosticos.component';

describe('ListarDiagnosticosComponent', () => {
  let component: ListarDiagnosticosComponent;
  let fixture: ComponentFixture<ListarDiagnosticosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarDiagnosticosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarDiagnosticosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
