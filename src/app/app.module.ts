import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {} from '@angular/compiler';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { SignupComponent } from './auth/signup/signup.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './navigation/header/header.component';
import { NavtabsComponent } from './navigation/navtabs/navtabs.component';
import { SidenavListComponent } from './navigation/sidenav-list/sidenav-list.component';
import {MatIconModule} from '@angular/material/icon';
import {MatSliderModule} from '@angular/material/slider';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { AddMealComponent } from './meal/add-meal/add-meal.component';
import { AddRoomComponent } from './room/add-room/add-room.component';
import { RoomDetailsComponent } from './room/room-details/room-details.component';
import { RoomListComponent } from './room/room-list/room-list.component';
import { CreateBookingComponent } from './booking/create-booking/create-booking.component';
import { MealListComponent } from './meal/meal-list/meal-list.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Content } from '@angular/compiler/src/render3/r3_ast';
import { UpdateRoomComponent } from './room/update-room/update-room.component';
import { AddExtraComponent } from './extras/add-extra/add-extra.component';
import { UpdateExtraComponent } from './extras/update-extra/update-extra.component';
import { ExtraDetailsComponent } from './extras/extra-details/extra-details.component';
import { ExtraListComponent } from './extras/extra-list/extra-list.component';
import { MealDetailsComponent } from './meal/meal-details/meal-details.component';
import { UpdateMealComponent } from './meal/update-meal/update-meal.component';
import { BookingListComponent } from './booking/booking-list/booking-list.component';
import { BookingDetailsComponent } from './booking/booking-details/booking-details.component';
import { HttpClientModule } from '@angular/common/http';
import { MatListModule } from '@angular/material/list';
import { LoginComponent } from './auth/login/login.component';
import { CommonModule } from '@angular/common';
import { RoomListCComponent } from './room/room-list-c/room-list-c.component';
import { MealListCComponent } from './meal/meal-list-c/meal-list-c.component';
import { ExtraListCComponent } from './extras/extra-list-c/extra-list-c.component';
import { RouterModule } from '@angular/router';
import { HideForRolesDirective } from './directives/hideForRoles.directive';





@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    HomeComponent,
    HeaderComponent,
    NavtabsComponent,
    SidenavListComponent,
    AddMealComponent,
    AddRoomComponent,
    RoomDetailsComponent,
    RoomListComponent,
    CreateBookingComponent,
    MealListComponent,
    UpdateRoomComponent,
    AddExtraComponent,
    UpdateExtraComponent,
    ExtraDetailsComponent,
    ExtraListComponent,
    MealDetailsComponent,
    UpdateMealComponent,
    BookingListComponent,
    BookingDetailsComponent,
    LoginComponent,
    HideForRolesDirective,
    RoomListCComponent,
    MealListCComponent,
    ExtraListCComponent


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
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    MatListModule,
    NgbModule,
    MatSnackBarModule,
    CommonModule,
    RouterModule


    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
export class ProductModule { }


