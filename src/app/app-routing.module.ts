import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './pages/cart/cart.component';
import { GamesComponent } from './pages/games/games.component';
import { LoginComponent } from './pages/login/login.component';
import { LogoutComponent } from './pages/logout/logout.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { RegisterComponent } from './pages/register/register.component';
import { GameComponent } from './pages/game/game.component';
import { AuthGuard } from './guards/auth.guard';
import { ConfirmExitGuard } from './guards/confirm-exit.guard';

const routes: Routes = [
  { path: '', component: GamesComponent, pathMatch: 'full' },
  { path: 'game/:id', component: GameComponent},
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent, canDeactivate: [ConfirmExitGuard] },
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard]},
  { path: 'cart', component: CartComponent },
  { path: 'logout', component: LogoutComponent, canActivate: [AuthGuard]},
  { path: '**', component: NotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
