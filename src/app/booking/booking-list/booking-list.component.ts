import { Component, OnInit } from '@angular/core';
import { Booking } from 'src/app/shared/models/booking';
import { BookingService } from 'src/app/shared/services/bookingService';

@Component({
  selector: 'app-booking-list',
  templateUrl: './booking-list.component.html',
  styleUrls: ['./booking-list.component.scss']
})
export class BookingListComponent implements OnInit {
bookings?: Booking[];
currentBooking: Booking = {};
currentIndex = -1;
name = '';

  constructor(private bookingService: BookingService) { }

  ngOnInit(): void {
    this.retrieveBookings();
  }


  retrieveBookings(): void{
    this.bookingService.getAllBookings()
    .subscribe({
      next: (res) => {
        this.bookings = res;
        console.log(res);
      },
      error: e => console.error(e)
    });
  }

  refreshList(): void {
    this.retrieveBookings();
    this.currentBooking = {};
    this.currentIndex = -1;
  }

  setActiveBooking(booking: Booking, index: number): void {
    this.currentBooking = booking;
    this.currentIndex = index;
  }


}
