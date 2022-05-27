import { Component, OnInit } from '@angular/core';
import { Booking } from '../../shared/models/booking';
import { BookingService } from '../../shared/services/bookingService';

@Component({
  selector: 'app-create-booking',
  templateUrl: './create-booking.component.html',
  styleUrls: ['./create-booking.component.scss']
})
export class CreateBookingComponent implements OnInit {


  constructor(private bookingService: BookingService) { }

  ngOnInit(): void {

  }

  createBooking(booking: Booking): void{}
}


