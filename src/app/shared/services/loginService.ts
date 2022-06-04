import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Login} from '../models/login';

const baseUrl = 'http://localhost:8080/login'

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private LOGIN_BASE_URL = 'login';

  constructor(private httpClient: HttpClient) {
  }

  //method to validate login
  public validateLogin(login: Login) {
    return this.httpClient.post<Login>(baseUrl, login);
  }
}
