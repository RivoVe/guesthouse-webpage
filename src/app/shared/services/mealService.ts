import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Meal } from '../models/meal';

const baseUrl = 'http://localhost:8080/meals'

@Injectable({
  providedIn: 'root'
})
export class MealService{

constructor(private http: HttpClient) { }

getAll(): Observable<Meal[]>{
  return this.http.get<Meal[]>(baseUrl);
}

get(id: any): Observable<any>{
  return this.http.get(`${baseUrl}/${id}`);
}

createMeal(meal: Meal): Observable<unknown> {
  return this.http.post(baseUrl, meal);
}

updateMeal(meal: Meal): Observable<unknown> {
  return this.http.put(baseUrl, meal);
}

delete(id: any): Observable<any>{
  return this.http.get(`${baseUrl}/delete/${id}`);
}

restore(id: any): Observable<any>{
  return this.http.get(`${baseUrl}/restore/${id}`);
}

deleteMeal(id:any): Observable<any>{
  return this.http.get(`${baseUrl}/full-delete/${id}`);
}



}