import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { FormateUser } from '../models/interfaces';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private cookies: CookieService) { }

  register(firstname: string, lastname: string, age: number, email: string, pwd: string, cart: [], games: []){
    return this.http.post("http://localhost:3000/users", 
    {
      firstname: firstname,
      lastname: lastname,
      age: age,
      email: email, 
      password: pwd,
      cart: cart,
      games: games
    })
  }

  login(email: string, pwd: string): Observable<any>{
    return this.http.post("http://localhost:3000/login",
    {
      email: email,
      password: pwd
    })
  }

  logout(){
    return this.cookies.delete("user")
  }

  setUser(user: FormateUser){
    this.cookies.set("user", JSON.stringify(user))
  }

  getUser(){
    try {
      return JSON.parse(this.cookies.get("user"))
    } catch (error) {
      return null
    }
  }

  logedOrNot():boolean{
    return this.cookies.check("user")
  }

}
