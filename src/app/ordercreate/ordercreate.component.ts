import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OrderserviceService } from '../orderservice.service';

@Component({
  selector: 'app-ordercreate',
  templateUrl: './ordercreate.component.html',
  styleUrls: ['./ordercreate.component.css']
})
export class OrdercreateComponent implements OnInit {

  @Input()
 public orderDetails = {oid:0,total:0,orderType: '',orderDate: '',cid:0};
  constructor(private restApi:OrderserviceService,public router: Router) { }

  ngOnInit(): void {
  }
addOrder(){

  this.restApi.createOrder(this.orderDetails)
  .subscribe();
    this.router.navigate(['/orderlist']);
}
}



