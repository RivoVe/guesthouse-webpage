import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccomodationComponent } from './accomodation/accomodation.component';
import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';
import { FoodBevarageComponent } from './food-bevarage/food-bevarage.component';
import { HomeComponent } from './home/home.component';
import { HinnakiriComponent } from './hinnakiri/hinnakiri.component';
import { CreateBookingComponent } from './booking/create-booking/create-booking.component';
import { AddMealComponent } from './meal/add-meal/add-meal.component';
import { RoomListComponent } from './components/room-list/room-list.component';
import { RoomDetailsComponent } from './components/room-details/room-details.component';
import { AddRoomComponent } from './components/add-room/add-room.component';



const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'accomodation', component: AccomodationComponent },
  { path: 'signin', component: SigninComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'food-beverage', component: FoodBevarageComponent },
  { path: 'hinnakiri', component: HinnakiriComponent },
  { path: '', component: HomeComponent},
  { path: 'booking', component: CreateBookingComponent},
  { path: 'meals', component: AddMealComponent},
  { path: 'rooms', component: RoomListComponent },
  { path: 'rooms/:id', component: RoomDetailsComponent },
  { path: 'rooms/add', component: AddRoomComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
