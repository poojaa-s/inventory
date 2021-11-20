import { Component, OnInit } from '@angular/core';
import { OrderserviceService } from '../orderservice.service';

@Component({
  selector: 'app-orderdetails',
  templateUrl: './orderdetails.component.html',
  styleUrls: ['./orderdetails.component.css']
})
export class OrderdetailsComponent implements OnInit {

public order =[] as any;
  constructor(private oservice:OrderserviceService) { }

  ngOnInit(): void {
    this.oservice.getOrderFromService().subscribe(data => this.order=data);
  }

}