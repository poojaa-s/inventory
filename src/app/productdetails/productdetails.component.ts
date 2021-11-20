import { Component, OnInit } from '@angular/core';
import { ProductserviceService } from '../productservice.service';

@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.css']
})
export class ProductdetailsComponent implements OnInit {
  public product=[] as any;
  constructor(private pservice:ProductserviceService) { }

  ngOnInit(): void {
    this.pservice.getProductFromService().subscribe(data => this.product=data);
  }

}




