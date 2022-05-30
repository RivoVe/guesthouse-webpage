import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Extras } from 'src/app/shared/models/extras';
import { Meal } from 'src/app/shared/models/meal';
import { Room } from 'src/app/shared/models/room.model';
import { MealService } from 'src/app/shared/services/mealService';
import { RoomService } from 'src/app/shared/services/room.service';
import { ExtrasService } from 'src/app/shared/services/extrasService';

import { BookingService } from '../../shared/services/bookingService';


const baseUrl = 'http://localhost:4200/booking'


@Component({
  selector: 'app-create-booking',
  templateUrl: './create-booking.component.html',
  styleUrls: ['./create-booking.component.scss']
})
export class CreateBookingComponent implements OnInit {
rooms: Room[] = [];
meals: Meal[] = [];
extras: Extras[] = [];
paymentMethod: string [] =['PAY_WHEN_ARRIVING', 'BEFOREHAND_INVOICE'];
createBookingForm!: FormGroup;

currentRoom: any = this.rooms[0];
currentMeal: any = this.meals[0];
currentExtras: any = this.extras[0];

  constructor(private bookingService: BookingService, private roomService: RoomService,
    private router: Router, private mealService: MealService,
    private extrasService: ExtrasService) {

   }

  ngOnInit(): void {
    this.roomService.getAll().subscribe(res => {
      console.log(res);
      this.rooms = res;
  });

  this.mealService.getAll().subscribe(res => {
    console.log(res);
    this.meals = res;
  });

this.extrasService.getAll().subscribe(res => {
  console.log(res);
  this.extras = res;
  });

    this.createBookingForm = new FormGroup({
      id: new FormControl(),
      arrivalDate: new FormControl(),
      leavingDate: new FormControl(),
      numberOfPeople:new FormControl(),
      name: new FormControl(),
      email: new FormControl(),
      phoneNumber: new FormControl(),
      rooms: new FormControl(),
      meals: new FormControl(),
      extras: new FormControl(),
      totalPrice: new FormControl(),
      paymentMethod: new FormControl(),
      comments: new FormControl(),
      user: new FormControl(),
      isConfirmed: new FormControl(),
      isActive: new FormControl(),
      isPaid: new FormControl()
    })

  }

  onSubmit(): void {
    // get list of room-ids that are selected in the form and get the rooms from this.rooms based on the id selected.

    this.bookingService.createBooking(this.createBookingForm.value).subscribe(() => {
      this.createBookingForm.reset();
      this.router.navigateByUrl('');
    });

  }
setNewRoom(room: Room): void {
  console.log(room);
  this.currentRoom=room;
}

setNewMeal(meal: Meal): void {
  console.log(meal);
  this.currentMeal=meal;
}

setNewExtra(extras: Extras): void {
  console.log(extras);
  this.currentExtras=extras;
}

  }






