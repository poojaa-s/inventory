import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../product';
import { ProductserviceService } from '../productservice.service';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit {

  public products= [] as any;
  
  public selectedId: number = 0;
  constructor(private pservice: ProductserviceService, private router: Router , private aroute:ActivatedRoute) {}

  ngOnInit(): void {
    
    this.pservice.getProductFromService().subscribe((data) => {
      this.products = data;
    });
  }
onDelete(prod: Product) {
  this.selectedId = prod.pid;
  console.log(this.selectedId);
  if (window.confirm('Are your sure, you want to delete?')) {
    this.pservice.deleteProduct(this.selectedId).subscribe((data) => {
      this.router.navigate(['/productlist']);
    });
  }
}
/*updateCustomer() {
  console.log('customer data ---' + this.customers);
  this.eservice.updateCustomer(this.customers)
    .subscribe();  this.router.navigate(['/custlist']);
}*/
}






