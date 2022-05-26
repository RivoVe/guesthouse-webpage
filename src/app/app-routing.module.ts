import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccomodationComponent } from './accomodation/accomodation.component';
import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';
import { FoodBevarageComponent } from './food-bevarage/food-bevarage.component';
import { HomeComponent } from './home/home.component';
import { HinnakiriComponent } from './hinnakiri/hinnakiri.component';
import { CreateBookingComponent } from './create-booking/create-booking.component';
import { AddMealComponent } from './meal/add-meal/add-meal.component';


const routes: Routes = [
  { path: 'accomodation', component: AccomodationComponent },
  { path: 'signin', component: SigninComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'food-beverage', component: FoodBevarageComponent },
  { path: 'hinnakiri', component: HinnakiriComponent },
  { path: '', component: HomeComponent},
  { path: 'booking', component: CreateBookingComponent},
  { path: 'meal', component: AddMealComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
