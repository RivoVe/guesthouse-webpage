import { Component, Input, OnInit } from '@angular/core';
import { Booking } from 'src/app/shared/models/booking';
import { ActivatedRoute, Router } from '@angular/router';
import { BookingService } from 'src/app/shared/services/bookingService';


@Component({
  selector: 'app-booking-details',
  templateUrl: './booking-details.component.html',
  styleUrls: ['./booking-details.component.scss']
})
export class BookingDetailsComponent implements OnInit {
  @Input() viewMode = false;
  @Input() currentBooking: Booking = {
    id: 0,
    arrivalDate: new Date,
    leavingDate: new Date,
    numberOfPeople: 0,
    name:'',
    email:'',
    phoneNumber: '',
    rooms:[],
    meals: [],
    extras:[],
    totalPrice:0,
    paymentMethod:'',
    comments:'',
    user:[],
    isConfirmed:false,
    isActive:true,
    isPaid:false

  }

  message? = '';

  constructor(private bookingService: BookingService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    if (!this.viewMode) {
      this.message = '';
      this.getBooking(this.route.snapshot.params["id"]);
    }
  }

  getBooking(id: string): void {
    this.bookingService.findBookingById(id)
    .subscribe(
      {
        next: (res) => {
          this.currentBooking = res;
          console.log(res);
        } ,
        error: (e) => console.error(e)
      }
    );
  }

  updateBooking(): void{
    this.router.navigate(['updateBooking', this.currentBooking.id]);
  }


  inActiveBooking(): void{
    this.message = '';
    this.bookingService.inActivate(this.currentBooking.id)
    .subscribe(
      {
      next: (res) => {
        console.log(res);
        this.message = res.message ? res.message:'The booking was updated';
      },
      error: (e) => console.error(e)
    }
    );
  }


    restoreBooking(): void{
      this.message = '';
      this.bookingService.restore(this.currentBooking.id)
      .subscribe(
        {
        next: (res) => {
          console.log(res);
          this.router.navigate(['/bookings']);
        },
        error: (e) => console.error(e)
      }
      );
    }

    deleteBooking(): void{
      this.message = '';
      this.bookingService.deleteBookingById(this.currentBooking.id)
      .subscribe(
        {
        next: (res) => {
          console.log(res);
          this.message = res.message ? res.message:'The booking was deleted';
        },
        error: (e) => console.error(e)
      }
      );
    }

}
