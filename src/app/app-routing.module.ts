import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from "./login/login.component";
import { StockComponent } from './stock/stock.component';
import { AppComponent } from "./app.component";
import { UsersComponent } from './users/users.component';
//import { Routes, RouterModule } from '@angular/router';



const appRoutes: Routes = [ 
  { path: '', component: AppComponent},
  { path: 'login', component: LoginComponent},
  { path: 'stock', component: StockComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
