import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Booking } from '../models/booking';

const baseUrl = 'http://localhost:4200/booking'
@Injectable({
  providedIn: 'root'
})
export class TutorialService {

  constructor(private http: HttpClient) { }
  //method to find booking by id
  create(data: any): Observable<any> {
    return this.http.post(baseUrl, data);
  }
  //method to find booking by id
  findBookingById(id: any): Observable<Booking[]>{
    return this.http.get<Booking[]>(`${baseUrl}?id=${id}`);

  }
  //method to update booking
  update(id: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl}/${id}`, data);
  }

  //method to "delete" booking by booking id - set active false so no one can see the booking

  //method to full delete booking by id
  delete(id: any): Observable<any>{
    return this.http.delete(`${baseUrl}/${id}`);
  }

  //method to restore booking

  //get all bookings
  getAll(): Observable<Booking[]>{
    return this.http.get<Booking[]>(baseUrl);
  }

  //calculate total amount of booking method

}
