import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup,Validators} from '@angular/forms';
import { Router } from '@angular/router';

import { UsersService } from 'src/app/services/users.service';
import { __values } from 'tslib';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  // loginform=new FormGroup({
  //   email:new FormControl(''),
  //   password:new FormControl('')
  // })
  id: any;
  name: any;
  Email: any;
  role:any;
  useremail: any = sessionStorage.getItem('Email');
  constructor(
    private userservice: UsersService,
    private router: Router,
    private http: HttpClient
  ) {}

  loginform = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });

  loginuser() {
    console.log(this.loginform.value);
    if (
      this.loginform.value.email == null ||
      this.loginform.value.password == null
    ) {
      alert('Please enter your credentials');
    } else {
      //  Checking login credentials
      this.userservice.login(this.loginform.value).subscribe((data) => {
        console.log(data);
        if (data.message == 'invalid combination of credentials') {
          alert('Incorrect credentials, try again');
        } else if (data.role == 'user') {
          sessionStorage.setItem('userId', data.id);
          sessionStorage.setItem('name', data.name);
          sessionStorage.setItem('Email', data.email);
          sessionStorage.setItem('role',data.role);
          this.id = sessionStorage.getItem('userId');
          this.name = sessionStorage.getItem('name');
          this.Email = sessionStorage.getItem('Email');
          this.role=sessionStorage.getItem('role');
console.log(sessionStorage.getItem('name'));
          alert('Logged in successfully');
         
          this.router.navigate(['']);
          //location.reload();
          setTimeout(() => {
            location.reload();
          }, 100);
        } else {
          sessionStorage.setItem('userId', data.id);
          sessionStorage.setItem('name', data.name);
          sessionStorage.setItem('Email', data.email);
          sessionStorage.setItem('role', data.role);
         // console.log(this.id);

          this.id = sessionStorage.getItem('userId');
          this.name = sessionStorage.getItem('name');
          this.Email = sessionStorage.getItem('Email');
          this.role = sessionStorage.getItem('role');
 alert('Logged in successfully');
          
          this.router.navigate(['']);
          
           setTimeout(() => {
             location.reload();
           }, 100);
        }
      });
    }

    this.loginform.reset();
    
  }
  // logout() {

  //   sessionStorage.clear();
  //   this.id = '';
  //   this.name = '';

  //   alert("Logged out successfully");
  //   this.router.navigate(['']);
  // }

  ngOnInit(): void {}
}
