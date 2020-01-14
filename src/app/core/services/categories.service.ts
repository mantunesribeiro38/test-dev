import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class CategoriesService {

  private API_URL = `${this.API_URL}/${id}` ;

  constructor(
    protected private: HttpClient
  ) { }

  list() {
    return this.http.get<T>(API_URL).pipe(take(1));
  }

}