import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Extras } from '../models/extras';

const baseUrl = 'http://localhost:4200/extras'
@Injectable({
  providedIn: 'root'
})
export class ExrasService{

constructor(private http: HttpClient) { }

  //method to find extra by id
  createExtra(data: any): Observable<any> {
    return this.http.post(baseUrl, data);
  }

  //method to find extras by id
  findExtraById(id: any): Observable<Extras[]>{
    return this.http.get<Extras[]>(`${baseUrl}?id=${id}`);
  }

   //method to update extra
   updateExtra(id: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl}/${id}`, data);
  }

  //method to delete extra by id
  deleteExtraById(id: any): Observable<any>{
    return this.http.delete(`${baseUrl}/${id}`);
  }
  //get all extras
  getAllExtras(): Observable<Extras[]>{
    return this.http.get<Extras[]>(baseUrl);
  }

}
