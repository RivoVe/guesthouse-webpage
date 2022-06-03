import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';

const baseUrl = 'http://localhost:8080/signup'
@Injectable({
  providedIn: 'root'
})
export class UserService{

constructor(private http: HttpClient) { }

  //method to find user by id
  createUser(user: User): Observable<unknown> {
    return this.http.post(baseUrl, user);
  }

  //method to find user by id
  findUserById(id: any): Observable<any>{
    return this.http.get(`${baseUrl}?id=${id}`);
  }

   //method to update user
   updateUser(user: User): Observable<unknown> {
    return this.http.put(baseUrl, user);
  }

  //method to delete user by id
  deleteUserById(id: any): Observable<any>{
    return this.http.get(`${baseUrl}/full-delete/${id}`);
  }
  //get all users
  getAllUsers(): Observable<User[]>{
    return this.http.get<User[]>(baseUrl);
  }

  loginUser(user: User): Observable<Object>{
    console.log(user)
  return this.http.post(`${baseUrl}`, user);
  }

}
