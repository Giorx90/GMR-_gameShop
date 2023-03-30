import { Component } from '@angular/core';
import { FormateGame } from './../../models/interfaces';
import { StoreService } from './../../services/store.service';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.scss']
})
export class GamesComponent {

  games: FormateGame [] = [];
  grid: boolean = true;

  constructor(private storeService:StoreService){}

  ngOnInit(): void {
    this.storeService.getGames().subscribe((data:any)=>{    
      this.games = [...data]
    })
  }

  turntoGrid(){
    this.grid=true
  }

  turntoList(){
    this.grid=false
  }

}
