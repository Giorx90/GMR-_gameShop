import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormateGame } from '../models/interfaces';


@Injectable({
  providedIn: 'root'
})
export class StoreService {

  store_url: string = "http://localhost:3000/store"

  cart_url: string = "http://localhost:3000/cart"

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

  getGame(id:number){
    return this.http.get(`${this.store_url}/${id}`)
  }

  cartGame(game: FormateGame){
    return this.http.post(this.cart_url,game)
  }

}
