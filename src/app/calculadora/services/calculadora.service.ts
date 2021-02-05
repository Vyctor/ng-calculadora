import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculadoraService {

  static readonly SOMA: string = '+';
  static readonly SUBTRACAO: string = '-';
  static readonly DIVISAO: string = '/';
  static readonly MULTIPLICACAO: string = '*';

  constructor() { }

  public calcular(numeroA: number, numeroB: number, operacao: string): number {
    switch (operacao) {
      case CalculadoraService.SOMA:
        return numeroA + numeroB;
      case CalculadoraService.SUBTRACAO:
        return numeroA - numeroB;
      case CalculadoraService.MULTIPLICACAO:
        return numeroA * numeroB;
      case CalculadoraService.DIVISAO:
        return numeroA / numeroB;
      default:
        return 0;
    }
  }

}
