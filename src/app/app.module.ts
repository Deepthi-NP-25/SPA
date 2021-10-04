import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import {AccountsModule} from './accounts/accounts.module';
import {FormsModule} from '@angular/forms';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component'
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AdmindashboardComponent
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AccountsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
