import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormateGame } from '../models/interfaces';


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
    return this.http.get(this.store_url)
  }

  getGame(gameId:number){
    return this.http.get(`${this.store_url}/${gameId}`)
  }

  cartGame(game: FormateGame, userId:number){
    return this.http.post(`${this.user_url}/${userId}?_embed=cart`, game) //función para pasar cosas de la store al carrito (no me va)
  }

  getCartGames(userId:number){
    return this.http.get(`${this.user_url}/${userId}?cart`) //esta es la que te comentaba, que creo que no va bien tampcoo
  }

  deleteCartGame(userId:number, gameId: number){
    return this.http.delete(`${this.user_url}/${userId}/cart/${gameId}`)
  }
  
  deleteAllCartGames(userId:number){
    return this.http.delete(`${this.user_url}/${userId}/cart`)
  }

  buyGame(game: FormateGame, userId:number){
    return this.http.post(`${this.user_url}/${userId}/games`, game)
  }

  getProfileGames(userId:number){
    return this.http.get(`${this.user_url}/${userId}?games`)
  }
  
  deleteProfileGame(gameId: number, userId:number){
    return this.http.delete(`${this.user_url}/${userId}/games/${gameId}`)
  }

}
