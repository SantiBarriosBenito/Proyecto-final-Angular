import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { VehiculosI } from 'src/app/interfaces/model';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  private id!:number;
  private product!:VehiculosI;
  constructor(private http: HttpClient) { }

  getProducts(){
    return this.http.get("http://localhost:3000/products");
  }

  getProductsById(id:number){
    return this.http.get(`http://localhost:3000/products/${id}`);
  }

  postProduct(product:VehiculosI){
    return this.http.post(`http://localhost:3000/products`, product);
  }

  putProduct(product:VehiculosI, id:number){
    return this.http.put(`http://localhost:3000/products/${id}`, product);
  }

  setProduct(product:VehiculosI, id:number){
    this.product = product;
    this.id = id;
  }

  deleteProduct(id:number){
    return this.http.delete(`http://localhost:3000/products/${id}`);
  }

  getMyProduct(){
    return this.product;
  }

  getMyId(){
    return this.id;
  }
}
