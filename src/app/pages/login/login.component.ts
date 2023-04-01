import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  email: string = ""
  pwd: string = ""
  error: string = ""

  constructor(private authService: AuthService, private router: Router){}

  login(){
    this.authService.login(this.email, this.pwd).subscribe(data=>{
      this.error = ""
      this.authService.setUser(data.user)
      this.router.navigateByUrl("/profile")
    },
    ex=>{
      this.error = ex.error;
    })
  }

}
