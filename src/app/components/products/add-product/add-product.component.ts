import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProductsService } from 'src/app/services/products/products.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss'],
})
export class AddProductComponent {
  addProductForm!: FormGroup;

  constructor(public productService: ProductsService) {
    this.buildAddProductForm();
  }

  buildAddProductForm() {
    const urlPattern =
      /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w.-]*)*\/?$/;

    this.addProductForm = new FormGroup({
      name: new FormControl(null, [Validators.required]),
      value: new FormControl(null, [Validators.required]),
      imgUrl: new FormControl(null, [
        Validators.required,
        Validators.pattern(urlPattern),
      ]),
    });
  }
  addProduct() {
    const newProduct = this.addProductForm.value;

    this.productService.insertProduct(newProduct).subscribe((product: any) => {
      console.log('Produto Cadastrado com Sucesso!');
    });
  }
}
