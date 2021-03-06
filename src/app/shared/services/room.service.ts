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

  getAll(): Observable<any>{
    return this.http.get(baseUrl);
  }

  get(id: any): Observable<any>{
    return this.http.get(`${baseUrl}/${id}`);
  }

  createRoom(room: Room): Observable<unknown> {
    return this.http.post(baseUrl, room);
  }

  updateRoom(room: Room): Observable<unknown> {
    return this.http.put(baseUrl, room);
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

  UploadImage(inputdata: any): Observable<any>{
    return this.http.post("http://localhost:8080/rooms/UploadImage", inputdata,{
      reportProgress:true,
      observe:'events'
    });
  }

  RemoveImage(id: any): Observable<any>{
    return this.http.get(`${baseUrl}/RemoveImage/${id}`);
  }




}

