import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faSquare, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { LoginGithubService } from '../shared/services/login.github.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private loginGithubService: LoginGithubService) { }

  faGithub = faGithub;
  faSquare = faSquare;
  faPaperPlane = faPaperPlane;

  ngOnInit() {
  }

  onClick() {
    this.loginGithubService.login();
  }



}
