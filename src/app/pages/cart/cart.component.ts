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

  constructor(private authService: AuthService, private storeService:StoreService, private router: Router){}

  ngOnInit(): void{
    this.user = this.authService.getUser()

    this.storeService.getCartGames(this.user.id).subscribe((data:any)=>{
      this.games = data.cart   
      console.log(this.games);
      this.total = this.games.reduce((acc, game) => acc + game.price, 0)
    })

      

  }

  deleteCartGame(id:number){
    console.log(this.game);
    console.log(this.user.id);
    
    
    //this.storeService.deleteCartGame(this.user.id, this.game)((data: any)=>{
    //})
  }

  pay(){
    alert("Payment succesful!")
    this.router.navigateByUrl("/profile")
  }
}
