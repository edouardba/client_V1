import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AngularTokenService } from 'angular-token';
import { User } from '../shared/models/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, 
              private router: Router, 
              private tokenService: AngularTokenService) { }

  loginForm: FormGroup;
  loading = false;
  submitted = false;

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
  });
  }

  get f() {
    return this.loginForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    if (this.loginForm.invalid) {
        return;
    }
    this.loading = true;

    // this.tokenService.signIn({
    //   login: this.f.email.value,
    //   password: this.f.password.value
    // }).subscribe(
    // (data) => {
    //   console.log(data)
      this.router.navigate( ['dashboard-manager']);
    // },
    // (error) => {
    //   console.log('Error Password !' + error);
    //   console.log(this.tokenService.signIn)
    // }
    // )
  }

}
