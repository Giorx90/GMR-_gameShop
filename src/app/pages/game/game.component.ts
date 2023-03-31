import { Component } from '@angular/core';
import { StoreService } from 'src/app/services/store.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormateGame } from 'src/app/models/interfaces';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent {

  id!: number;
  game!: FormateGame;

  constructor(private storeService:StoreService, private activatedRoute:ActivatedRoute, private router:Router){}
  
  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(params=> {
      this.id = Number(params.get("id"));
      })
   
    this.storeService.getGame(this.id).subscribe((data:any)=> {
      this.game = data
      })
  }

  cartGame() {
    this.storeService.cartGame(this.game).subscribe((data:any)=>{   
    })
  }





}
