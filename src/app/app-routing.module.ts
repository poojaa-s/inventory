import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';

import { CustomercreateComponent } from './customercreate/customercreate.component';
import { CustomereditComponent } from './customeredit/customeredit.component';
import { CustomerlistComponent } from './customerlist/customerlist.component';
import { CustomerdetailsComponent } from './customerdetails/customerdetails.component';
import { LogoutComponent } from './logout/logout.component';
import { AuthGaurdService } from './service/auth-guaurd.service';
import { OrdercreateComponent } from './ordercreate/ordercreate.component';
import { OrdereditComponent } from './orderedit/orderedit.component';
import { OrderdetailsComponent } from './orderdetails/orderdetails.component';
import { OrderlistComponent } from './orderlist/orderlist.component';
import { ProductcreateComponent } from './productcreate/productcreate.component';
import { ProducteditComponent } from './productedit/productedit.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { ProductlistComponent } from './productlist/productlist.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'aboutus', component: AboutusComponent },
  { path: 'contactus', component: ContactusComponent },
  { path: 'home', component: HomeComponent},
  { path: 'signup', component: SignupComponent },
  {path:'customercreate',component:CustomercreateComponent},
  {path:'customeredit/:cid',component:CustomereditComponent},
  {path:'customerlist',component:CustomerlistComponent},
  {path:'customerdetails',component:CustomerdetailsComponent},
  { path:'ordercreate',component:OrdercreateComponent},
  { path:'orderedit/:oid',component:OrdereditComponent},
  { path:'orderdetails',component:OrderdetailsComponent},
  { path:'orderlist',component:OrderlistComponent},
  { path:'productcreate',component:ProductcreateComponent},
  { path:'productedit',component:ProducteditComponent},
  { path:'productdetails',component:ProductdetailsComponent},
  { path:'productlist',component:ProductlistComponent},
  {path:'logout',component:LogoutComponent,canActivate:[AuthGaurdService] },
  {
    path: 'services/:id',
    //component:
    children: [
    ],
  },

 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
