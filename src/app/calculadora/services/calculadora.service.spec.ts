import { inject, TestBed } from '@angular/core/testing';

import { CalculadoraService } from './calculadora.service';

describe('CalculadoraService', () => {
  let service: CalculadoraService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalculadoraService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return 2 when 1 + 1', inject([CalculadoraService], () => {
    const sum = service.calcular(1, 1, CalculadoraService.SOMA);
    expect(sum).toEqual(2);
  }));

  it('should return 0 when 1 - 1', inject([CalculadoraService], () => {
    const sub = service.calcular(1, 1, CalculadoraService.SUBTRACAO);
    expect(sub).toEqual(0);
  }));

  it('should return 1 when 1 / 1', inject([CalculadoraService], () => {
    const div = service.calcular(1, 1, CalculadoraService.DIVISAO);
    expect(div).toEqual(1);
  }));

  it('should return 1 when 1 * 1', inject([CalculadoraService], () => {
    const mult = service.calcular(1, 1, CalculadoraService.MULTIPLICACAO);
    expect(mult).toEqual(1);
  }));
});
