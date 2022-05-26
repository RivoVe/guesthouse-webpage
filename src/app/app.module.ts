import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {} from '@angular/compiler';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { AccomodationComponent } from './accomodation/accomodation.component';
import { RoomsComponent } from './accomodation/rooms/rooms.component';
import { FoodBevarageComponent } from './food-bevarage/food-bevarage.component';
import { AuthComponent } from './auth/auth.component';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './navigation/header/header.component';
import { NavtabsComponent } from './navigation/navtabs/navtabs.component';
import { SidenavListComponent } from './navigation/sidenav-list/sidenav-list.component';
import {MatIconModule} from '@angular/material/icon';
import {MatSliderModule} from '@angular/material/slider';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import { HinnakiriComponent } from './hinnakiri/hinnakiri.component';
import { CreateBookingComponent } from './create-booking/create-booking.component';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import { MatListModule } from '@angular/material/list';
import { HttpClientModule } from '@angular/common/http';
import { AddMealComponent } from './meal/add-meal/add-meal.component';
import { DeleteMealComponent } from './meal/delete-meal/delete-meal.component';


@NgModule({
  declarations: [
    AppComponent,
    AccomodationComponent,
    RoomsComponent,
    FoodBevarageComponent,
    AuthComponent,
    SignupComponent,
    SigninComponent,
    HomeComponent,
    HeaderComponent,
    NavtabsComponent,
    SidenavListComponent,
    HinnakiriComponent,
    AddMealComponent,
    DeleteMealComponent,
    CreateBookingComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    MatIconModule,
    MatSliderModule,
    MatSidenavModule,
    MatToolbarModule,
    FlexLayoutModule,
    MatInputModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatListModule,
    HttpClientModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


