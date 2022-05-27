import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';
import { HomeComponent } from './home/home.component';
import { CreateBookingComponent } from './booking/create-booking/create-booking.component';
import { AddMealComponent } from './meal/add-meal/add-meal.component';
import { RoomDetailsComponent } from './room/room-details/room-details.component';
import { AddRoomComponent } from './room/add-room/add-room.component';
import { RoomListComponent } from './room/room-list/room-list.component';



const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'signin', component: SigninComponent },
  { path: 'signup', component: SignupComponent },
  { path: '', component: HomeComponent},
  { path: 'booking', component: CreateBookingComponent},
  { path: 'meals', component: AddMealComponent},
  { path: 'rooms', component: RoomListComponent },
  { path: 'rooms/:id', component: RoomDetailsComponent },
  { path: 'addRoom', component: AddRoomComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
