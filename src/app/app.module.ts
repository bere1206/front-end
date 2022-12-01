import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
//import { routing } from "./app-routing.module";
import {FormsModule}from '@angular/forms';
import { Injectable } from "@angular/core";
import { AppComponent } from "./app.component";
import { LoginComponent } from "./login/login.component";
import { StockComponent } from "./stock/stock.component";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { UsersComponent } from "./users/users.component";
import { MenuComponent } from "./menu/menu.component";
import { HttpClientModule } from "@angular/common/http";
import { Routes, RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';



@Injectable({
  providedIn: "root"
})
export class UsersService {
  constructor(private http: HttpClient) {}

  login(user: any): Observable<any> {
    return this.http.post("https://reqres.in/api/login", user);
  }
}

@NgModule({
  declarations: [AppComponent, LoginComponent, StockComponent, UsersComponent, MenuComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}



