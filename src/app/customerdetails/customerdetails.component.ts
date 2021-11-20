import { Component, OnInit } from '@angular/core';
import { CustomerserviceService } from '../customerservice.service';

@Component({
  selector: 'app-customerdetails',
  templateUrl: './customerdetails.component.html',
  styleUrls: ['./customerdetails.component.css']
})
export class CustomerdetailsComponent implements OnInit {
  public customer =[] as any;
  constructor(private cservice:CustomerserviceService) { }

  ngOnInit(): void {
    this.cservice.getCustomerFromService().subscribe((data) => {this.customer=data});
  }

}
