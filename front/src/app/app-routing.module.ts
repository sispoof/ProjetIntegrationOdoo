import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import{ IsetComponent } from './iset/iset.component';
import { LoginComponent } from './login/login.component';
import {AdminGuard} from './guards/admin.guard'

const routes: Routes = [
  { path:'', component:LoginComponent},
  {path:'home', component:HomeComponent,canActivate:[AdminGuard]},
  {path:'iset', component:IsetComponent,canActivate:[AdminGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
