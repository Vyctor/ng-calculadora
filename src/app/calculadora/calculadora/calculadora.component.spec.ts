import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { CalculadoraService } from '../services/calculadora.service';

import { CalculadoraComponent } from './calculadora.component';

describe('CalculadoraComponent', () => {
  let component: CalculadoraComponent;
  let fixture: ComponentFixture<CalculadoraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CalculadoraComponent],
      providers: [CalculadoraService]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculadoraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should return 5 when 3 + 2', () => {
    const btn3 = fixture.debugElement.query(By.css('#btn3'));
    const btnSoma = fixture.debugElement.query(By.css('#btnSoma'));
    const btn2 = fixture.debugElement.query(By.css('#btn2'));
    const btnCalcular = fixture.debugElement.query(By.css('#btnCalcular'));
    const display = fixture.debugElement.query(By.css('#display'));

    btn3.triggerEventHandler('click', null);
    fixture.detectChanges();

    btnSoma.triggerEventHandler('click', null);
    fixture.detectChanges();

    btn2.triggerEventHandler('click', null);
    fixture.detectChanges();

    btnCalcular.triggerEventHandler('click', null);
    fixture.detectChanges();

    expect(display.nativeElement.value).toEqual('5');
  });

  it('should return 5 when 10 / 2', () => {
    const btn1 = fixture.debugElement.query(By.css('#btn1'));
    const btn0 = fixture.debugElement.query(By.css('#btn0'));
    const btnDivisao = fixture.debugElement.query(By.css('#btnDivisao'));
    const btn2 = fixture.debugElement.query(By.css('#btn2'));
    const btnCalcular = fixture.debugElement.query(By.css('#btnCalcular'));
    const display = fixture.debugElement.query(By.css('#display'));

    btn1.triggerEventHandler('click', null);
    fixture.detectChanges();

    btn0.triggerEventHandler('click', null);
    fixture.detectChanges();

    btnDivisao.triggerEventHandler('click', null);
    fixture.detectChanges();

    btn2.triggerEventHandler('click', null);
    fixture.detectChanges();

    btnCalcular.triggerEventHandler('click', null);
    fixture.detectChanges();

    expect(display.nativeElement.value).toEqual('5');
  });

  it('should return 1 when 3 - 2', () => {
    const btn3 = fixture.debugElement.query(By.css('#btn3'));
    const btnSoma = fixture.debugElement.query(By.css('#btnSubtracao'));
    const btn2 = fixture.debugElement.query(By.css('#btn2'));
    const btnCalcular = fixture.debugElement.query(By.css('#btnCalcular'));
    const display = fixture.debugElement.query(By.css('#display'));

    btn3.triggerEventHandler('click', null);
    fixture.detectChanges();

    btnSoma.triggerEventHandler('click', null);
    fixture.detectChanges();

    btn2.triggerEventHandler('click', null);
    fixture.detectChanges();

    btnCalcular.triggerEventHandler('click', null);
    fixture.detectChanges();

    expect(display.nativeElement.value).toEqual('1');
  });

  it('should return 6 when 3 * 2', () => {
    const btn3 = fixture.debugElement.query(By.css('#btn3'));
    const btnSoma = fixture.debugElement.query(By.css('#btnMultiplicacao'));
    const btn2 = fixture.debugElement.query(By.css('#btn2'));
    const btnCalcular = fixture.debugElement.query(By.css('#btnCalcular'));
    const display = fixture.debugElement.query(By.css('#display'));

    btn3.triggerEventHandler('click', null);
    fixture.detectChanges();

    btnSoma.triggerEventHandler('click', null);
    fixture.detectChanges();

    btn2.triggerEventHandler('click', null);
    fixture.detectChanges();

    btnCalcular.triggerEventHandler('click', null);
    fixture.detectChanges();

    expect(display.nativeElement.value).toEqual('6');
  });
});
