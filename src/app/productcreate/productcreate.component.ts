import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductserviceService } from '../productservice.service';

@Component({
  selector: 'app-productcreate',
  templateUrl: './productcreate.component.html',
  styleUrls: ['./productcreate.component.css']
})
export class ProductcreateComponent implements OnInit {


 public productDetails={pname:'', price:'',qty: '',mdate:'',edate:''
};
 constructor(private restApi:ProductserviceService,public router: Router) { }

 ngOnInit(): void {
 }
addProduct(){

 this.restApi.createProduct(this.productDetails)
 .subscribe();
   this.router.navigate(['/productlist']);
}
}
