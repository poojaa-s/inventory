import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';

import { SignupComponent } from './signup/signup.component';

import { CustomercreateComponent } from './customercreate/customercreate.component';
import { CustomereditComponent } from './customeredit/customeredit.component';
import { CustomerlistComponent } from './customerlist/customerlist.component';
import { CustomerserviceService } from './customerservice.service';
import { CustomerdetailsComponent } from './customerdetails/customerdetails.component';
import { LogoutComponent } from './logout/logout.component';
import { OrdercreateComponent } from './ordercreate/ordercreate.component';
import { OrdereditComponent } from './orderedit/orderedit.component';
import { OrderdetailsComponent } from './orderdetails/orderdetails.component';
import { OrderlistComponent } from './orderlist/orderlist.component';
import { ProductcreateComponent } from './productcreate/productcreate.component';
import { ProducteditComponent } from './productedit/productedit.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { ProductlistComponent } from './productlist/productlist.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AboutusComponent,
    ContactusComponent,
    LoginComponent,
    HomeComponent,
    SignupComponent,
  
    CustomercreateComponent,
    CustomereditComponent,
    CustomerlistComponent,
    CustomerdetailsComponent,
    LogoutComponent,
    OrdercreateComponent,
    OrdereditComponent,
    OrderdetailsComponent,
    OrderlistComponent,
    ProductcreateComponent,
    ProducteditComponent,
    ProductdetailsComponent,
    ProductlistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [CustomerserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
