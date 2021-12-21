import { TestBed } from '@angular/core/testing';

import { FrmcitaService } from './frmcita.service';

describe('FrmcitaService', () => {
  let service: FrmcitaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FrmcitaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
