import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Category } from '../models/category';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class CategoriesService {

  private API_URL = 'http://tecprime.com.br/api/categories' ;

  constructor(
    private http: HttpClient
  ) { }

  list() {
    return this.http.get<Category>(this.API_URL).pipe(
      tap(console.log)
    );
  }

}