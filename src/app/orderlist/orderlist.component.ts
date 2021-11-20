import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Order } from '../order';
import { OrderserviceService } from '../orderservice.service';

@Component({
  selector: 'app-orderlist',
  templateUrl: './orderlist.component.html',
  styleUrls: ['./orderlist.component.css']
})
export class OrderlistComponent implements OnInit {

  public orders= [] as any;
  
  public selectedId: number = 0;
  constructor(private oservice: OrderserviceService, private router: Router,private aroute: ActivatedRoute) {}
  
  ngOnInit(): void {
    
    this.oservice.getOrderFromService().subscribe((data) => {
      this.orders = data;
    });
  }
onDelete(ord: Order) {
  this.selectedId =ord.oid;
  console.log(this.selectedId);
  if (window.confirm('Are your sure, you want to delete?')) {
    this.oservice.deleteOrder(this.selectedId).subscribe((data) => {
      this.router.navigate(['/orderlist']);
    });
  }
}
/*updateCustomer() {
  console.log('customer data ---' + this.customers);
  this.eservice.updateCustomer(this.customers)
    .subscribe();  this.router.navigate(['/custlist']);
}*/
}


