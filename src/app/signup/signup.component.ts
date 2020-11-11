import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  buildForm(): void {
    signupFB = this.su.group({
      username: ['', Validators.required,
        Validators.minLength(4)],
      email: [''],
      passwords: this.su.group({
        password: ['', Validators.required,
          Validators.minLength(8)],
        conPassword: ['', Validators.required]
      }), vali
    });
  }



  constructor(private su: FormBuilder ) { }

  ngOnInit(): void {
  this.buildForm()
  }

}
