import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormateUser } from 'src/app/models/interfaces';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit{
  user: any = null

  constructor (private authService: AuthService, private router: Router){}

  ngOnInit(): void {
    this.router.events.subscribe(event=>{
      if(event.constructor.name === "NavigationEnd"){
        this.user = this.authService.getUser()
      }
    })
   
  }

}
