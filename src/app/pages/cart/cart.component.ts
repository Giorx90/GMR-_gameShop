import { Component, OnInit } from '@angular/core';
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

  constructor(private authService: AuthService, private storeService:StoreService){}

  ngOnInit(): void{
    this.user = this.authService.getUser()

    this.storeService.getCartGames(this.user.id).subscribe((data:any)=>{
      this.games = data.cart
            
    })
  }

  deleteCartGame(){}
}
