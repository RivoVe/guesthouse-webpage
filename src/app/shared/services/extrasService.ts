import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Extras } from '../models/extras';

const baseUrl = 'http://localhost:8080/extras'

@Injectable({
  providedIn: 'root'
})
export class ExtrasService{

constructor(private http: HttpClient) { }

  
  //get all extras
  getAll(): Observable<Extras[]>{
    return this.http.get<Extras[]>(baseUrl);
  }

  //method to find extras by id
  get(id: any): Observable<any>{
    return this.http.get(`${baseUrl}/${id}`);
  }

  //method to create extras
  createExtra(extras: Extras): Observable<unknown> {
    return this.http.post(baseUrl, extras);
  }

  delete(id: any): Observable<any>{
    return this.http.get(`${baseUrl}/delete/${id}`);
  }

  restore(id: any): Observable<any>{
    return this.http.get(`${baseUrl}/restore/${id}`);
  }

  deleteExtra(id:any): Observable<any>{
    return this.http.get(`${baseUrl}/full-delete/${id}`);
  }

  updateExtra(extras: Extras): Observable<unknown> {
    return this.http.put(baseUrl, extras);
  }

}

