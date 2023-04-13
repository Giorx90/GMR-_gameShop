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

  //games/game components

  getGames() {
    return this.http.get(this.store_url) 
  }

  getGame(gameId:number){
    return this.http.get(`${this.store_url}/${gameId}`) 
  }

  getUserCart(user:any){
    return this.http.get(`${this.user_url}/${user.id}`) 
  }

  addGameToCart(user: any, newCart:any){
    return this.http.patch(`${this.user_url}/${user.id}`, {cart: newCart}) 
  }

  //cart component

  getCartGames(userId:number){
    return this.http.get(`${this.user_url}/${userId}`) 
  }

  deleteGameFromCart(user: any, newCart:any){
    return this.http.patch(`${this.user_url}/${user.id}`, {cart: newCart}) 
  }
  
  clearCart(user: any, newCart:any){
    return this.http.patch(`${this.user_url}/${user.id}`, {cart: newCart}) 
  }

  buyGames(user: any, newGames:any){
    return this.http.patch(`${this.user_url}/${user.id}`, {games: newGames}) 
  }

  //profile component

  getProfileGames(userId:number){
    return this.http.get(`${this.user_url}/${userId}`) 
  }
  
  deleteGameFromProfile(user: any, newGames:any){
    return this.http.patch(`${this.user_url}/${user.id}`, {games: newGames}) 
  }

}
