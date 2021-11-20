import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Customer } from '../customer';
import { CustomerserviceService } from '../customerservice.service';

@Component({
  selector: 'app-customeredit',
  templateUrl: './customeredit.component.html',
  styleUrls: ['./customeredit.component.css']
})
export class CustomereditComponent implements OnInit {
 
  public customerDetails: Customer= {cid:0,cname:'',phone:0};
 
  public cid: any = this.aroute.snapshot.params['cid'];
  public selectedId: any;
  
  constructor(
    private restApi: CustomerserviceService,
    private router: Router,
    private aroute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    console.log('from ng onint ' + this.cid + this.selectedId);
    this.restApi.getCustomer(this.cid).subscribe((data) => {
      this.customerDetails = data;
    });
    
  }
    updateCustomer() {
      console.log('customer data ---' + this.customerDetails);
      this.restApi.updateCustomer(this.customerDetails)
        .subscribe();  this.router.navigate(['/customerlist']);
    }
}
  

