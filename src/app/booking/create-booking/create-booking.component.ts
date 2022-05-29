import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Extras } from 'src/app/shared/models/extras';
import { Meal } from 'src/app/shared/models/meal';
import { Room } from 'src/app/shared/models/room.model';
import { RoomService } from 'src/app/shared/services/room.service';

import { Booking } from '../../shared/models/booking';
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

  constructor(private bookingService: BookingService, private roomService: RoomService, private router: Router) {

   }

  ngOnInit(): void {
    this.roomService.getAll();

    this.createBookingForm = new FormGroup({
      id: new FormControl(),
      arrivalDate: new FormControl(),
      leavingDate: new FormControl(),
      numberOfPeople:new FormControl(),
      name: new FormControl(),
      email: new FormControl(),
      phoneNumber: new FormControl(),
      rooms: new FormControl([this.rooms[0], this.rooms[2]]),
      meals: new FormControl([this.meals[0], this.meals[2]]),
      extras: new FormControl([this.extras[0], this.extras[2]]),
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
    this.bookingService.createBooking(this.createBookingForm.value).subscribe(() => {
      this.createBookingForm.reset();
      this.router.navigateByUrl('');
    })
  }
}



