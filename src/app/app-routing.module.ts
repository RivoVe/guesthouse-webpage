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
import { MealListComponent } from './meal/meal-list/meal-list.component';
import { UpdateRoomComponent } from './room/update-room/update-room.component';
import { ExtraListComponent } from './extras/extra-list/extra-list.component';
import { ExtraDetailsComponent } from './extras/extra-details/extra-details.component';
import { AddExtraComponent } from './extras/add-extra/add-extra.component';
import { UpdateExtraComponent } from './extras/update-extra/update-extra.component';
import { MealDetailsComponent } from './meal/meal-details/meal-details.component';
import { UpdateMealComponent } from './meal/update-meal/update-meal.component';
import { BookingListComponent } from './booking/booking-list/booking-list.component';
import { BookingDetailsComponent } from './booking/booking-details/booking-details.component';



const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'signin', component: SigninComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'booking', component: CreateBookingComponent},
  { path: 'bookings', component: BookingListComponent},
  { path: 'bookings/:id', component: BookingDetailsComponent},
  { path: 'meals', component: MealListComponent},
  { path: 'meals/:id', component: MealDetailsComponent },
  { path: 'addMeal', component: AddMealComponent},
  { path: 'updateMeal/:id', component: UpdateMealComponent },
  { path: 'rooms', component: RoomListComponent },
  { path: 'rooms/:id', component: RoomDetailsComponent },
  { path: 'addRoom', component: AddRoomComponent },
  { path: 'updateRoom/:id', component: UpdateRoomComponent },
  { path: 'extras', component: ExtraListComponent },
  { path: 'extras/:id', component: ExtraDetailsComponent },
  { path: 'addExtra', component: AddExtraComponent },
  { path: 'updateExtra/:id', component: UpdateExtraComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
