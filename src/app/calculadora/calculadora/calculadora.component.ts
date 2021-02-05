import { Component, OnInit } from '@angular/core';
import { CalculadoraService } from '../services/calculadora.service';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.scss']
})
export class CalculadoraComponent implements OnInit {
  private numeroA!: string | null;
  private numeroB!: string | null;
  private resultado!: number | null;
  private operacao!: string | null;

  constructor(private service: CalculadoraService) { }

  ngOnInit(): void {
    this.limpar();
  }

  public limpar(): void {
    this.numeroA = '0';
    this.numeroB = null;
    this.resultado = null;
    this.operacao = null;
  }

  public adicionarNumero(numero: string): void {
    if (this.operacao === null) {
      this.numeroA = this.concatenarNumero(this.numeroA ? this.numeroA : '0', numero);
    } else {
      this.numeroB = this.concatenarNumero(this.numeroB ? this.numeroB : '0', numero);

    }
  }

  public concatenarNumero(numeroAtual: string, numeroConcatenado: string): string {
    if (numeroAtual === '0' || numeroAtual === null) {
      numeroAtual = '';
    }
    if (numeroConcatenado === '.' && numeroAtual === '') {
      return '0.';
    }
    if (numeroConcatenado === '.' && numeroAtual.indexOf('.') > -1) {
      return numeroAtual;
    }
    return numeroAtual + numeroConcatenado;
  }

  public definirOperacao(operacao: string): void {
    if (this.operacao === null) {
      this.operacao = operacao;
      return;
    }
    if (this.numeroB !== null && this.numeroA) {
      this.resultado = this.service.calcular(
        parseFloat(this.numeroA),
        parseFloat(this.numeroB),
        this.operacao
      );
      this.operacao = operacao;
      this.numeroA = this.resultado.toString();
      this.numeroB = null;
      this.resultado = null;
    }
  }

  public calcular(): void {
    if (this.numeroB === null) {
      return;
    }
    if (this.numeroA && this.numeroB && this.operacao) {
      this.resultado = this.service.calcular(parseFloat(this.numeroA), parseFloat(this.numeroB), this.operacao);
    }
  }

  public display(): string {
    if (this.resultado !== null) {
      return this.resultado.toString();
    }
    if (this.numeroB !== null) {
      return this.numeroB;
    }
    return this.numeroA ? this.numeroA : '0';
  }



}
