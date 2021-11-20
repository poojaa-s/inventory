import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductserviceService } from '../productservice.service';

@Component({
  selector: 'app-productedit',
  templateUrl: './productedit.component.html',
  styleUrls: ['./productedit.component.css']
})
export class ProducteditComponent implements OnInit {

 
  public productData: any = {};
  public pid: any = this.aroute.snapshot.params['pid'];
  public selectedId: any;
  
  constructor(
    private restApi: ProductserviceService,
    private router: Router,
    private aroute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    console.log('from ng onint ' + this.pid + this.selectedId);
    this.restApi.getProduct(this.pid).subscribe((data) => {
      this.productData = data;
    });
    console.log('from ng oninit ' + this.pid + this.selectedId);
    }

    updateProduct() {
      console.log('product data ---' + this.productData);
      this.restApi.updateProduct(this.productData)
        .subscribe();  this.router.navigate(['/productlist']);
    }
}
