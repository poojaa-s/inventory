import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../service/authentication.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username = 'javainuse'
  password = '00'
  invalidLogin = false

  constructor(private router: Router,
    private loginservice: AuthenticationService) { }




  checkLogin() {
    if (this.loginservice.authenticate(this.username, this.password)
    ) {
      this.router.navigate([''])
      this.invalidLogin = false
    } else
      this.invalidLogin = true
  }


  goToServices() {  

    /*todo--- use ngif else */
    

        this.router.navigate(['/aboutus']);
    }  

    goTorgister(){
      this.router.navigate(['/signup']);
    }
  ngOnInit() {}

}