import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProductsService } from 'src/app/services/products/products.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss'],
})
export class EditProductComponent {
  editProductForm!: FormGroup;
  product!: any;

  constructor(
    public productService: ProductsService,
    public dialogRef: MatDialogRef<EditProductComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.buildAddProductForm();
    this.product = data;

    this.editProductForm.patchValue(this.product);
  }

  buildAddProductForm() {
    const urlPattern =
      /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w.-]*)*\/?$/;

    this.editProductForm = new FormGroup({
      name: new FormControl(null, [Validators.required]),
      value: new FormControl(null, [Validators.required]),
      imgUrl: new FormControl(null, [
        Validators.required,
        Validators.pattern(urlPattern),
      ]),
    });
  }

  closeDialog() {
    this.dialogRef.close();
  }

  editProduct() {
    const editedProduct = this.editProductForm.value;

    this.productService
      .editProduct(this.product.id, editedProduct)
      .subscribe((product: any) => {
        console.log('Produto editado com Sucesso!');
      });

    this.dialogRef.close();
  }
}
