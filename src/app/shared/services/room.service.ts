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

  get(id: any): Observable<any>{
    return this.http.get(`${baseUrl}/${id}`);
  }

  public create(room: Room): Observable<unknown> {
    return this.http.post<Room>(baseUrl, room);
  }

  createRoom(room: Room): Observable<unknown> {
    return this.http.post(baseUrl, room);
  }

  update(room: Room): Observable<any> {
    return this.http.put<Room>(baseUrl, room);
  }

  delete(id: any): Observable<any>{
    return this.http.get(`${baseUrl}/delete/${id}`);
  }

  restore(id: any): Observable<any>{
    return this.http.get(`${baseUrl}/restore/${id}`);
  }

  deleteRoom(id:any): Observable<any>{
    return this.http.get(`${baseUrl}/full-delete/${id}`);
  }

}

