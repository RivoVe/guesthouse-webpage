import { Component, OnInit } from '@angular/core';
import { Booking } from 'src/app/models/booking';

@Component({
  selector: 'app-create-booking',
  templateUrl: './create-booking.component.html',
  styleUrls: ['./create-booking.component.scss']
})
export class CreateBookingComponent implements OnInit {

  booking: Booking = {

    arrivalDate:'',
    leavingDate:'',
    numberOfPeople:'',
    name:'',
    email:'',
    phoneNumber:'',
    rooms:'',
    meals:'',
    extras:'',
    totalPrice:'',
    paymentMethod:''

  }

  constructor() { }

  ngOnInit(): void {
  }

}



