import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  firstname: string = ""
  lastname: string = ""
  email: string = ""
  pwd: string = ""
  age: number = 0
  cart: [] = []
  games: [] = []

  constructor(private authService: AuthService, private router:Router){}

  register(){
    this.authService.register(
      this.firstname,
      this.lastname,
      this.age,
      this.email,
      this.pwd,
      this.cart,
      this.games
    ).subscribe(data=>{
      alert('usuario registrado')
      this.router.navigateByUrl("/")
    },
    ex=>{
      alert('error al registrar')
    })
  }

}
