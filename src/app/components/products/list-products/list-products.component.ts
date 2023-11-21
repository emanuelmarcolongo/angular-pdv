import { Component } from '@angular/core';
import { ProductsService } from 'src/app/services/products/products.service';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.scss'],
})
export class ListProductsComponent {
  products!: any;
  user!: any;
  isAdmin!: boolean;

  constructor(public productService: ProductsService) {
    this.productService.getProducts().subscribe((products: any[]) => {
      this.products = products;
    });

    const user = localStorage.getItem('User');
    if (user) {
      this.user = JSON.parse(user);
    }
  }
}
