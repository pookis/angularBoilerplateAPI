import { Component, OnInit } from '@angular/core';
import { ProductAPIService } from '../ServiceLayer/product-api.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products_list;
  constructor(private myservice:ProductAPIService
  ) { }

  ngOnInit() {

  // this.products_list=this.myservice.GetAllProducts().subscribe(res=>{
  //   this.products_list=res;
  // })

  // this.products_list=this.myservice.GetAllproductsByname('samsung').subscribe(res=>{
  //   this.products_list=res;
  // })
     
  
  this.GetProducts();

  }

  GetProducts()
  {
    this.products_list=this.myservice.GetProcuctsBYnameandPrice('redmi',4000).subscribe(res=>{
      this.products_list=res;
     })

  }
  SaveNewProduct(formdata)
  {
    this.myservice.InsertNewProduct(formdata).subscribe(res=>{
      alert("Sucessfully Inserted....");
      this.GetProducts();

    },
    err=>{

    },()=>{
      alert('complted');
    })
  }

}
