import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Meal } from '../models/meal';

const baseUrl = 'http://localhost:4200/meal'
@Injectable({
  providedIn: 'root'
})
export class MealService{

constructor(private http: HttpClient) { }

  //method to find meal by id
  createMeal(meal: Meal): {
    return this.http.post<Meal>(baseUrl, meal);
  }

  //method to find meal by id
  findMealById(id: any): Observable<Meal[]>{
    return this.http.get<Meal[]>(`${baseUrl}?id=${id}`);
  }

   //method to update meal
   updateMeal(id: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl}/${id}`, data);
  }

  //method to delete meal by id
  deleteMealById(id: any): Observable<any>{
    return this.http.delete(`${baseUrl}/${id}`);
  }
  //get all meals
  getAllMeals(): Observable<Meal[]>{
    return this.http.get<Meal[]>(baseUrl);
  }

}
