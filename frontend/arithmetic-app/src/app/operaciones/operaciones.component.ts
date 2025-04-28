import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-operaciones',
  templateUrl: './operaciones.component.html',
  styleUrls: ['./operaciones.component.css']
})
export class OperacionesComponent {
  num1!: number;
  num2!: number;
  operation: 'sum'|'subtract'|'multiply'|'divide' = 'sum';
  result: number | null = null;
  errorMessage = '';

  constructor(private api: ApiService) {}

  calculate() {
    this.errorMessage = '';
    this.result = null;

    // Validar enteros
    if (!Number.isInteger(this.num1) || !Number.isInteger(this.num2)) {
      this.errorMessage = 'Ambos valores deben ser enteros.';
      return;
    }

    let call$ = this.api[this.operation](this.num1, this.num2);
    call$.subscribe({
      next: res => this.result = res,
      error: err => this.errorMessage = err.error || 'Error al llamar al servicio'
    });
  }
}
