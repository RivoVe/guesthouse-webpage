import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/shared/models/user';
import { UserService } from 'src/app/shared/services/userService';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public loginForm!: FormGroup

  constructor(private formBuilder: FormBuilder, private router: Router, private userService: UserService) {
  }

  user: User = new User();

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email:[''],
      password:['']
    })
  }

  login (){
    console.log(this.user)
    this.userService.loginUser(this.user).subscribe(data=>{
      alert("Login successful!")
      this.router.navigateByUrl('');
    }, error=> alert ("Please enter correct email and password"));
  }

}
