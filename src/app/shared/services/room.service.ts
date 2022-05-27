import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Room } from '../models/room.model';

const baseUrl = 'http://localhost:8080/rooms'

@Injectable({
  providedIn: 'root'
})
export class RoomService {

  

  constructor(private http: HttpClient) { }

  getAll(): Observable<Room[]>{
    return this.http.get<Room[]>(baseUrl);
  }

  get(id: any): Observable<Room>{
    return this.http.get(`${baseUrl}/${id}`);
  }

  public create(room: Room): Observable<unknown> {
    return this.http.post<Room>(baseUrl, room);
  }

  createRoom(room: Room): Observable<unknown> {
    return this.http.post(baseUrl, room);
  }
 
  update(id: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl}/${id}`, data);
  }

  delete(id: any): Observable<any>{
    return this.http.get(`${baseUrl}/${id}`);
  }

  restore(id: any): Observable<any>{
    return this.http.get(`${baseUrl}/${id}`);
  }

  deleteAll(): Observable<any>{
    return this.http.delete(baseUrl);
  }

}

