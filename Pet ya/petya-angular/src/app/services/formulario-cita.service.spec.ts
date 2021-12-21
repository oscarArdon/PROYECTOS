import { TestBed } from '@angular/core/testing';

import { FormularioCitaService } from './formulario-cita.service';

describe('FormularioCitaService', () => {
  let service: FormularioCitaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormularioCitaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
