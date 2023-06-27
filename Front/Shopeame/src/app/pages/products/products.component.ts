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
categoriaList: VehiculosI[] = [];
filtroList!: VehiculosI[];
valueF:string = "";

constructor(private productApi: ServicesService, public authApi: AuthService, private router: Router){}

ngOnInit(): void {
  this.productApi.getProducts().subscribe((data:any) => {
    this.productList = [...data];
    this.filtroList = [...data];
  })
}

mirarDetalle (id:any) {

  if (this.authApi.getToken())
   {
    this.router.navigate([`/products/${id}`]);
   }   
  }

  filtrarDatos(ev: string){
  
    if(this.categoriaList.length > 0){
      this.filtroList = this.categoriaList.filter( (item) =>
         (item.name.toLowerCase().includes(ev.toLowerCase()))
        )
    } else{
      
      this.filtroList = this.productList.filter( (item) =>
      (item.name.toLowerCase().includes(ev.toLowerCase()))
     )
    }
  }

  filtrarCategorias(categoria:string){
   this.valueF = ""
    if(categoria == ""){
      this.categoriaList = [];
      this.filtroList = [...this.productList];
    } else{
    this.categoriaList=this.productList.filter((item) => 
      item.category == categoria
    )
    
    this.filtroList=this.productList.filter((item) => 
       item.category == categoria
    )
  }
}

}
