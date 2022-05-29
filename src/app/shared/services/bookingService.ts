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
  createBooking(data: any): Observable<any> {
    return this.http.post(baseUrl, data);
  }
  //method to find booking by id
  findBookingById(id: any): Observable<any>{
    return this.http.get(`${baseUrl}?id=${id}`);
  }

  //method to update booking
  updateBooking(id: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl}/full-delete/${id}`, data);
  }

  //method to full delete booking by id
  deleteBookingById(id: any): Observable<any>{
    return this.http.delete(`${baseUrl}/${id}`);
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
