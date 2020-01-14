import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Category } from '../models/category';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class CategoriesService {

  private readonly API_URL = `${environment.API_URL}` ;

  constructor(
    private http: HttpClient
  ) { }

  list() {
    return this.http.get<Category>(`${this.API_URL}categories`).pipe(
      tap(console.log)
    );
  }

  getProductsByCategory(id) {
      return this.http.get(`${this.API_URL}products/${id}`).pipe(
        tap(console.log)
      );
  }

}