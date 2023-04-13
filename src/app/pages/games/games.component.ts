import { Component } from '@angular/core';
import { FormateGame } from './../../models/interfaces';
import { StoreService } from './../../services/store.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.scss']
})
export class GamesComponent {

  games: FormateGame [] = [];
  grid: boolean = true;
  onprofile: boolean = false
  filteredGames: FormateGame [] = [];
  filter: string;
  game!: FormateGame
  id!: number
  user: any = {}

  constructor(private storeService:StoreService, private authService: AuthService){
    this.filter ="";
  }

  ngOnInit(): void {
    this.storeService.getGames().subscribe((data:any)=>{    
      this.games = [...data]
    })

    this.user= this.authService.getUser() 
    
    // if (this.user.games.includes(this.game)){
    //   this.onprofile = true
    // }
    
  }

  turntoGrid(){
    this.grid=true
  }

  turntoList(){
    this.grid=false
  }
  
  cartGame(game:any){
    this.storeService.getUserCart(this.user).subscribe((user:any)=>{
      const cart = user.cart
      cart.push(game)
      this.storeService.addGameToCart(this.user, cart).subscribe((data:any)=>{
      })
    })
  }
}
