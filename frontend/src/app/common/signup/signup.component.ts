import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {UsersService} from 'src/app/services/users.service'
import{FormGroup,FormControl,Validators,ReactiveFormsModule} from '@angular/forms'
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  signupform = new FormGroup({
    name: new FormControl('', [Validators.required,Validators.minLength(3),Validators.maxLength(25),]),
    email: new FormControl('', [Validators.required, Validators.pattern("^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$")]),
    password: new FormControl('',Validators.required),
  });

  constructor(private userservice: UsersService, private router: Router) {}

  ngOnInit(): void {}

  signup() {
    console.log(this.signupform.value.name===null);
    if (
      this.signupform.value.name == '' ||
      this.signupform.value.email == ''||
      this.signupform.value.password == ''
    ) {
      alert('Please Enter your Credentials');
    } else {
      //console.log(data);
      this.userservice.signup(this.signupform.value).subscribe((data) => {
        console.log(data);
        if (!data.error) {
          alert('Register successfully');
          this.router.navigate(['/login']);
        } else {
          alert('name,email or password allready in use');
          window.location.reload();
          // this.router.navigate(['/']);
        }
        
      });
    }
  }
}
