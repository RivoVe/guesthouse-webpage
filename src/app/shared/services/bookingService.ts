import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Booking } from '../models/booking';

const baseUrl = 'http://localhost:8080/booking'
@Injectable({
  providedIn: 'root'
})
export class BookingService {

  constructor(private http: HttpClient) { }


  //method to find booking by id
  createBooking(booking: Booking): Observable<unknown> {
    return this.http.post(baseUrl, booking);
  }
  //method to find booking by id
  findBookingById(id: any): Observable<any>{
    return this.http.get(`${baseUrl}?id=${id}`);
  }

  //method to update booking
  updateBooking(booking: Booking): Observable<unknown> {
    return this.http.put(baseUrl, booking);
  }

  //method to full delete booking by id
  deleteBookingById(id: any): Observable<any>{
    return this.http.get(`${baseUrl}/full-delete/${id}`);
  }

  //get all bookings
  getAllBookings(): Observable<Booking[]>{
    return this.http.get<Booking[]>(baseUrl);
  }

  inActivate(id: any): Observable<any>{
    return this.http.get(`${baseUrl}/delete/${id}`);
  }

  restore(id: any): Observable<any>{
    return this.http.get(`${baseUrl}/restore/${id}`);
  }

  //get all active bookings method

  //get all confirmed bookings

  //calculate total amount of booking method



}
