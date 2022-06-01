import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import { LoginService } from 'src/app/shared/services/loginService';
import { Login } from 'src/app/shared/models/login';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private snackBar: MatSnackBar, private formBuilder: FormBuilder, private loginService: LoginService) {
  }

  loginGroup!: FormGroup;

  ngOnInit(): void {
    this.loginGroup = this.formBuilder.group({
      email: '',
      password: ''
    });
  }

  /*login() {
    const login = new Login(this.loginGroup.get('email').value, this.loginGroup.get('password').value);
    this.loginService.validateLogin(login).subscribe(
      value => console.log(value),
      error => {
        this.snackBar.open(error.error.message + error.error.details[0], 'Close', {
          duration: 6000,
          panelClass: 'snack-error-message'
        });
      }
    );
  }
  */
}
