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
  filteredGames: FormateGame [] = [];
  filter: string;
  game!: FormateGame
  user: any = {}

  constructor(private storeService:StoreService, private authService: AuthService){
    this.filter ="";
  }

  ngOnInit(): void {
    this.storeService.getGames().subscribe((data:any)=>{    
      this.games = [...data]
    })

    this.user= this.authService.getUser()
    
  }

  turntoGrid(){
    this.grid=true
  }

  turntoList(){
    this.grid=false
  }
  
  cartGame() {
    this.storeService.cartGame(this.game, this.user.id).subscribe((data:any)=>{
      //this.user.cart = [this.user.cart, ...data]   
    })
  }

}
