import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormateGame } from 'src/app/models/interfaces';
import { AuthService } from 'src/app/services/auth.service';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {

  games: FormateGame [] = []
  game! : FormateGame
  user:any = {}
  total: number = 0
  id: number = 0
  i: number = 0

  constructor(private authService: AuthService, private storeService:StoreService, private router: Router){}

  ngOnInit(): void{
    this.user = this.authService.getUser()

    this.storeService.getCartGames(this.user.id).subscribe((data:any)=>{
      this.games = data.cart   
      this.total = this.games.reduce((acc, game) => acc + game.price, 0)
    })      

  }

  deleteCartGame(i: number){
    this.storeService.getUserCart(this.user).subscribe((user:any)=>{
      const cart = user.cart     
      cart.splice(i, 1)
      this.storeService.deleteGameFromCart(this.user, cart).subscribe((data:any)=>{
      })
      this.games.splice(i,1)
      this.total = this.games.reduce((acc, game) => acc + game.price, 0)
    })
  }

  pay(){
    alert("Payment succesful!")
    //buy games
    this.storeService.getUserCart(this.user).subscribe((user:any)=>{
      const games = user.games
      const cart = user.cart
      const newGames = [...games, ...cart] 
      this.storeService.buyGames(this.user, newGames).subscribe((data: any)=>{
      })
    })
    //clear cart
    this.storeService.getUserCart(this.user).subscribe((user:any)=>{
      const cart = user.cart     
      cart.splice(0, cart.length)
      this.storeService.clearCart(this.user, cart).subscribe((data:any)=>{
      })
    })
    this.router.navigateByUrl("/profile")
  }
}
