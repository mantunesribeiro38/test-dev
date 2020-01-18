import { environment } from '../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap, take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {

  private readonly API_URL = `${environment.API_URL}` ;

  constructor(
    private http: HttpClient
  ) { }
  
  //Código configurado para utilização do json Server
  getProductsByCategory(id) {
      return this.http.get(`${this.API_URL}products?categoria_id=${id}`).pipe(
        tap(console.log),
        take(1)
      );
  }


  /*
    # Trecho do código enviado para o teste
     getProductsByCategory(id) {
      return this.http.post(`${this.API_URL}products/`, { category: id}).pipe(
        tap(console.log)
      );
  }
  */
}