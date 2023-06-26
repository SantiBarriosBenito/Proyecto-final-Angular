import { Component } from '@angular/core';
import { VehiculosI } from 'src/app/interfaces/model';
import { ServicesService } from 'src/app/shared/services/services.service';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {

productList!: VehiculosI[];

constructor(private productApi: ServicesService){}

ngOnInit(): void {
  this.productApi.getProducts().subscribe((data:any) => {
    this.productList = data;
  })
}



}
