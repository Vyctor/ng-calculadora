import { Component, OnInit } from '@angular/core';
import { CalculadoraService } from '../services/calculadora.service';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.scss']
})
export class CalculadoraComponent implements OnInit {
  private numeroA!: string;
  private numeroB!: string;
  private resultado!: number;
  private operacao!: string;

  constructor(private service: CalculadoraService) { }

  ngOnInit(): void {
    this.limpar();
  }

  public limpar(): void {
    this.numeroA = '0';
    this.numeroB = '';
    this.resultado = 0;
    this.operacao = '';
  }

  public adicionarNumero(numero: string): void {
    if (this.operacao === '') {
      this.numeroA = this.concatenarNumero(this.numeroA, numero);
    } else {
      this.numeroB = this.concatenarNumero(this.numeroB, numero);
    }
  }

  public concatenarNumero(numeroAtual: string, numeroConcatenado: string): string {
    if (numeroAtual === '0' || numeroAtual === '') {
      numeroAtual = '';
    }
    if (numeroConcatenado === '.' && numeroAtual.indexOf('.') > -1) {
      return numeroAtual;
    }
    return numeroAtual + numeroConcatenado;
  }

  public definirOperacao(operacao: string): void {
    if (this.operacao === '') {
      this.operacao = operacao;
      return;
    }
    if (this.numeroB !== '') {
      this.resultado = this.service.calcular(
        parseFloat(this.numeroA),
        parseFloat(this.numeroB),
        this.operacao
      );
      this.operacao = operacao;
      this.numeroA = this.resultado.toString();
      this.numeroB = '';
      this.resultado = 0;
    }
  }

  public calcular(): void {
    if (this.numeroB === '') {
      return;
    }

    this.resultado = this.service.calcular(parseFloat(this.numeroA), parseFloat(this.numeroB), this.operacao);
  }

  public display(): string {
    if (this.numeroB !== null) {
      return this.numeroB;
    }
    return this.numeroA;
  }



}
