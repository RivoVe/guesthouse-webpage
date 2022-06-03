import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/shared/services/userService';

const baseUrl = 'http://localhost:4200/signup'


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  addUserForm!: FormGroup;

  constructor(private userService: UserService, private router: Router) {

  }

  ngOnInit(): void {
    this.addUserForm = new FormGroup({
    id: new FormControl(),
    name:new FormControl(),
    phoneNumber:new FormControl(),
    email:new FormControl(),
    registrationDate:new FormControl(Date.now),
    isActive:new FormControl(true),
    password:new FormControl(),
    authority: new FormControl('ROLE_LOGGED_IN')
  })
  }

  onSubmit(): void {
    this.userService.createUser(this.addUserForm.value).subscribe(() => {
      alert("You are successfully registered!");
      this.addUserForm.reset();
      this.router.navigateByUrl('/login');
    }, err=> {
      alert("Something went wrong, please try again!")
    }
    )
  }




}
