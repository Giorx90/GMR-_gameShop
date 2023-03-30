import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './pages/cart/cart.component';
import { GamesComponent } from './pages/games/games.component';
import { LoginComponent } from './pages/login/login.component';
import { LogoutComponent } from './pages/logout/logout.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { RegisterComponent } from './pages/register/register.component';

const routes: Routes = [
  { path:'', component: GamesComponent, pathMatch: 'full' },
  { path:'login', component: LoginComponent },
  { path:'register', component: RegisterComponent },
  { path:'profile', component: ProfileComponent },
  { path:'cart', component: CartComponent },
  { path:'logout', component: LogoutComponent },
  { path: '**', component: NotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
