import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Order } from '../order';
import { OrderserviceService } from '../orderservice.service';

@Component({
  selector: 'app-orderedit',
  templateUrl: './orderedit.component.html',
  styleUrls: ['./orderedit.component.css']
})
export class OrdereditComponent implements OnInit {

  
  public orderDetails: Order= {oid:0,total:0,orderType:'', orderDate:'',cid:0};
  public oid: any = this.aroute.snapshot.params['oid'];
  public selectedId: any;
  
  constructor(
    private restApi: OrderserviceService,
    private router: Router,
    private aroute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    console.log('from ng onint ' + this.oid + this.selectedId);
    this.restApi.getOrder(this.oid).subscribe((data) => {
      this.orderDetails = data;
    });
    
    }

    updateOrder() {
      console.log('order data ---' + this.orderDetails);
      this.restApi.updateOrder(this.orderDetails)
        .subscribe();
         this.router.navigate(['/orderlist']);
    }
}



  