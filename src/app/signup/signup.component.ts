import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { SignupService } from '../shared/services/signup.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private router: Router, private signupService: SignupService) { }

  signupForm: FormGroup;
  loading = false;
  submitted = false;
  public selectEngineerNumber = [
    {id: 1, value: 'Fewer than 10'},
    {id: 2, value: '11-50'},
    {id: 3, value: '51-100'},
    {id: 4, value: '101-200'},
    {id: 5, value: '200+'},
  ]
  public selectRole = [
    {id: 1, value: 'CTO'},
    {id: 2, value: 'VP of engineering'},
    {id: 3, value: 'Director of engineering'},
    {id: 4, value: 'Engineering manager'},
    {id: 5, value: 'Software engineer'},
    {id: 6, value: 'Other'},
  ]
  public selectHostingRepo = [
    {id: 1, value: 'GitHub'},
    {id: 2, value: 'GitHub Enterprise'},
    {id: 3, value: 'BitBucket'},
    {id: 4, value: 'GitLab'},
    {id: 5, value: 'Other'},
  ]
  public registration = {
    // firstname: null,
    // name: null,
    // email: null,
    // organization: null,
    // engineer: null,
    // hosting: null,
    // role: null
  }

  
  ngOnInit() {
    this.signupForm = this.formBuilder.group({
      firstname: ['', Validators.required],
      name: ['', Validators.required],
      email: ['', Validators.required],
      organization: ['', Validators.required],
      engineer: ['', Validators.required],
      hosting: ['', Validators.required],
      role: ['', Validators.required],
  });
  }

  get f() {
    return this.signupForm.controls;
  }

  onSubmit() {
    this.submitted = true;

    if (this.signupForm.invalid) {
        return;
    }

    this.loading = true;
    this.registration = this.signupForm.value;
    this.router.navigate(['thank-you'])

    // CALL SERVICE TO SEND THE DATA SELECTED TO THE BACKEND
    //this.signupService.sendRegistrationForm(this.registration);
  }

}
