import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ProductsService } from 'src/app/services/products/products.service';
import { EditProductComponent } from '../edit-product/edit-product.component';
import { ProductEntity } from '../../types/product-types';
import { UserEntity } from '../../types/user-types';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.scss'],
})
export class ListProductsComponent {
  products!: ProductEntity[];
  user!: UserEntity;
  isAdmin!: boolean;

  constructor(
    public productService: ProductsService,
    private dialog: MatDialog
  ) {
    this.productService.getProducts().subscribe((products: any[]) => {
      this.products = products;
    });

    const user = localStorage.getItem('User');
    if (user) {
      this.user = JSON.parse(user);
    }
  }

  openDialogEditProduct(product: any) {
    const dialogRef = this.dialog.open(EditProductComponent, {
      data: product,
      disableClose: true,
      width: '80%',
    });

    dialogRef.afterClosed().subscribe((devolutivaModal: any) => {
      this.productService
        .getProducts()
        .subscribe((products: ProductEntity[]) => {
          this.products = products;
        });
    });
  }
}
