import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, } from '@angular/forms';
import {ConfirmPasswordValidator} from '../confirm-password.validator';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})

export class SignupComponent implements OnInit {

  registerForm: FormGroup;
  submitted = false;
  constructor(private fb: FormBuilder) { }
  ngOnInit()  {
    this.registerForm = this.fb.group({
      username: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required]
    }, {
      validator: ConfirmPasswordValidator('password', 'confirmPassword')
    });
  }
  onSubmit(): void { this.submitted = true; }
}
