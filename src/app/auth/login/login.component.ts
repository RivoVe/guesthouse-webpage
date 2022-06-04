import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Login } from 'src/app/shared/models/login';
import { LoginService } from 'src/app/shared/services/loginService';
import { UserService } from 'src/app/shared/services/userService';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public loginForm!: FormGroup

  constructor(private formBuilder: FormBuilder, private router: Router, private userService: UserService,
    private loginService: LoginService, private snackBar: MatSnackBar) {
  }


  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email:'',
      password:''
    })
  }

  login (){
    const login = new Login(this.loginForm.get('email')?.value, this.loginForm.get("password")?.value);
    this.loginService.validateLogin(login).subscribe(
      value => {
        console.log(value);
        alert("Login successful!");
        this.loginForm.reset();
        this.router.navigateByUrl('');
      },
      error => {
        this.snackBar.open(error.error.message + error.error.details[0], 'Close', {
        duration: 6000,
        panelClass: 'snack-error-message'
      });
      }
    );
  }

}
