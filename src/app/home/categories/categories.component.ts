import { CategoriesService } from './../../core/services/categories.service';
import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/core/models/category';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

  categories: Category[] ;

  constructor(
    private categoriesService: CategoriesService 
  ) { }

  ngOnInit() {
    this.categoriesService.list().subscribe(
      data => this.categories = data
    );
  }

  showDetailsCategory (idCategory) {
    console.log(idCategory);
  }

}
