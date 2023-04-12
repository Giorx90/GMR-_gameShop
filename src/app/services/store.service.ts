import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormateGame } from '../models/interfaces';
import { CartComponent } from './../pages/cart/cart.component';


@Injectable({
  providedIn: 'root'
})
export class StoreService {

  store_url: string = "http://localhost:3000/store"

  user_url: string = "http://localhost:3000/users"

  constructor(private http: HttpClient) { }

  public gameData = {
    id: 0,
    title: "",
    platform: [],
    gender: [],
    developer: "",
    price: 0,
    rating: 0,
    img: ""
  }

  getGames() {
    return this.http.get(this.store_url) //Funciona
  }

  getGame(gameId:number){
    return this.http.get(`${this.store_url}/${gameId}`) //Funciona
  }

  addGameToCart(game: any, user:any){
    this.http.get(`${this.user_url}/${user.id}`).subscribe((data:any)=>{
      const user = data
      const  cart = user.cart
      cart.push(game)
      return this.http.patch(`${this.user_url}/${user.id}`, {cart: cart}) //No funciona
    })
    
   
  }

  getCartGames(userId:number){
    return this.http.get(`${this.user_url}/${userId}?cart`) //Funciona
  }

  deleteCartGame(userId:number, game: any){
    return this.http.delete(`${this.user_url}/${userId}`, game) //No funciona
  }
  
  deleteAllCartGames(userId:number){
    return this.http.delete(`${this.user_url}/${userId}/cart`) //No funciona
  }

  buyGame(game: FormateGame, userId:number){
    return this.http.post(`${this.user_url}/${userId}/games`, game) //No funciona
  }

  getProfileGames(userId:number){
    return this.http.get(`${this.user_url}/${userId}?games`) //Funciona
  }
  
  deleteProfileGame(gameId: number, userId:number){
    return this.http.delete(`${this.user_url}/${userId}/games/${gameId}`) //No funciona
  }

}
