import { CategoriesService } from './../../core/services/categories.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private categoriesService: CategoriesService 
  ) { }

  ngOnInit() {
    this.route.params.subscribe(
      ( params: any ) => {
        const id = params['id'];
        console.log(id);
        const products =  this.categoriesService.getProductsByCategory(id).subscribe();
      }
    );
  }

}
