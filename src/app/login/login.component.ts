import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faSquare, faPaperPlane } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) { }

  faGithub = faGithub;
  faSquare = faSquare;
  faPaperPlane = faPaperPlane;

  ngOnInit() {
  }

  onClick() {
    // call service for GitHub login
  }



}
