import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ApiService {
  // Puerto que se configuro en launchSettings.json del backend
  private baseUrl = 'http://localhost:5273/api/Operaciones';

  constructor(private http: HttpClient) { }

  sum(num1: number, num2: number): Observable<number> {
    const params = new HttpParams()
      .set('num1', num1.toString())
      .set('num2', num2.toString());
    return this.http.get<number>(`${this.baseUrl}/sum`, { params });
  }

  subtract(num1: number, num2: number): Observable<number> {
    const params = new HttpParams()
      .set('num1', num1.toString())
      .set('num2', num2.toString());
    return this.http.get<number>(`${this.baseUrl}/subtract`, { params });
  }

  multiply(num1: number, num2: number): Observable<number> {
    const params = new HttpParams()
      .set('num1', num1.toString())
      .set('num2', num2.toString());
    return this.http.get<number>(`${this.baseUrl}/multiply`, { params });
  }

  divide(num1: number, num2: number): Observable<number> {
    const params = new HttpParams()
      .set('num1', num1.toString())
      .set('num2', num2.toString());
    return this.http.get<number>(`${this.baseUrl}/divide`, { params });
  }
}
