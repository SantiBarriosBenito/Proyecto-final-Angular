import { Component } from '@angular/core';
import { VehiculosI } from 'src/app/interfaces/model';
import { AuthService } from 'src/app/shared/services/auth.service';
import { ServicesService } from 'src/app/shared/services/services.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {

productList!: VehiculosI[];

constructor(private productApi: ServicesService, public authApi: AuthService, private router: Router){}

ngOnInit(): void {
  this.productApi.getProducts().subscribe((data:any) => {
    this.productList = data;
  })
}

mirarDetalle (id:any) {
  console.log(id);

  if (this.authApi.getToken())
   {
    this.router.navigate([`/products/${id}`]);
   }   
  }

}
