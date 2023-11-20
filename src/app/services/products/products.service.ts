import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductDTO } from 'src/app/components/types/product-types';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private http: HttpClient) {}

  getProducts(): Observable<any> {
    return this.http.get('http://localhost:3000/products');
  }

  insertProduct(body: ProductDTO): Observable<any> {
    return this.http.post('http://localhost:3000/products', body);
  }

  deleteProduct(id: number): Observable<any> {
    return this.http.delete(`http://localhost:3000/products/${id}`);
  }

  editProduct(id: number, body: ProductDTO): Observable<any> {
    return this.http.put(`http://localhost:3000/products/${id}`, body);
  }
}
