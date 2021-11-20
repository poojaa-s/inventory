import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  restApi: any;

  constructor() { }

  ngOnInit(): void {
  }

  addCustomer(){
    console.log(this.user);
    this.restApi
      //.createEmployee(this.user)
      //.subscribe((data: {}) => this.router.navigate(['/aboutus']));
  }
  user(user: any) {
    throw new Error('Method not implemented.');
  }
}
