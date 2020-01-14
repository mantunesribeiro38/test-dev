import { Category } from './../../core/models/category';
import { CategoriesService } from './../../core/services/categories.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

  categories$: Observable<Category[]>;

  constructor(
    private categoriesService: CategoriesService,
    private router: Router,
    private route: ActivatedRoute 
  ) { }

  ngOnInit() {
      this.categories$ = this.categoriesService.list();
  }

  listProductsByCategory (idCategory) {
    this.router.navigate(['category', idCategory]);
  }

}
