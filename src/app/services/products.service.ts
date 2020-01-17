import { environment } from '../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap, delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {

  private readonly API_URL = `${environment.API_URL}` ;

  constructor(
    private http: HttpClient
  ) { }

  getProductsByCategory(id) {
      return this.http.get(`${this.API_URL}products?categoria_id=${id}`).pipe(
        tap(console.log)
      );
  }
}