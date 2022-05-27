import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';

const baseUrl = 'http://localhost:8080/user'
@Injectable({
  providedIn: 'root'
})
export class UserService{

constructor(private http: HttpClient) { }

  //method to find user by id
  createUser(data: any): Observable<any> {
    return this.http.post(baseUrl, data);
  }

  //method to find user by id
  findUserById(id: any): Observable<User[]>{
    return this.http.get<User[]>(`${baseUrl}?id=${id}`);
  }

   //method to update user
   updateUser(id: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl}/${id}`, data);
  }

  //method to delete user by id
  deleteUserById(id: any): Observable<any>{
    return this.http.delete(`${baseUrl}/${id}`);
  }
  //get all users
  getAllUsers(): Observable<User[]>{
    return this.http.get<User[]>(baseUrl);
  }

}
