import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";
import { PipesModule } from './pipes/pipes.module';
import { AppRoutingModule } from './app-routing.module';
import { NgScrollbarModule } from 'ngx-scrollbar';

import { AppComponent } from './app.component';
import { NavComponent } from './core/nav/nav.component';
import { FooterComponent } from './core/footer/footer.component';
import { GamesComponent } from './pages/games/games.component';
import { GameComponent } from './pages/game/game.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { LoginComponent } from './pages/login/login.component';
import { LogoutComponent } from './pages/logout/logout.component';
import { RegisterComponent } from './pages/register/register.component';
import { CartComponent } from './pages/cart/cart.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    GamesComponent,
    GameComponent,
    ProfileComponent,
    LoginComponent,
    LogoutComponent,
    RegisterComponent,
    CartComponent,
    NotfoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    PipesModule, 
    FormsModule,
    NgScrollbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
