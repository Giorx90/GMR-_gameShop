import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class StoreService {

  db_url: string = "http://localhost:3000/store"

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
    return this.http.get(this.db_url)
  }

}
