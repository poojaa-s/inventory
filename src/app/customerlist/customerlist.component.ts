import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Customer } from '../customer';
import { CustomerserviceService } from '../customerservice.service';

@Component({
  selector: 'app-customerlist',
  templateUrl: './customerlist.component.html',
  styleUrls: ['./customerlist.component.css']
})
export class CustomerlistComponent implements OnInit {
  public customers= [] as any;
  
  public selectedId: number = 0;
  constructor(private eservice: CustomerserviceService, private router: Router , private aroute:ActivatedRoute) {}

  ngOnInit(): void {
    
    this.eservice.getCustomerFromService().subscribe((data) => {
      this.customers = data;
    });
  }
onDelete(cust: Customer) {
  this.selectedId = cust.cid;
  console.log(this.selectedId);
  if (window.confirm('Are your sure, you want to delete?')) {
    this.eservice.deleteCustomer(this.selectedId).subscribe((data) => {
      this.router.navigate(['/customerlist']);
    });
  }
}

}