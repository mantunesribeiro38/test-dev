import { Category } from '../models/category';
import { CategoriesService } from '../services/categories.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

  categories$: Observable<Category[]>;

  constructor(
    private categoriesService: CategoriesService,
    private router: Router
  ) { }

  ngOnInit() {
      this.categories$ = this.categoriesService.list();
  }

  listProductsByCategory (idCategory) {
    this.router.navigate(['category', idCategory]);
  }

}
