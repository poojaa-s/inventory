import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerserviceService } from '../customerservice.service';

@Component({
  selector: 'app-customercreate',
  templateUrl: './customercreate.component.html',
  styleUrls: ['./customercreate.component.css']
})
export class CustomercreateComponent implements OnInit {
@Input()
public customerDetails={cid:0,cname:'', phone:''};

  constructor(private restApi: CustomerserviceService, public router: Router) { }

  ngOnInit(): void {
  }
addCustomer(){
    this.restApi
      .createCustomer(this.customerDetails)
      .subscribe();
      this.router.navigate(['/customerlist']);
      
}
}
