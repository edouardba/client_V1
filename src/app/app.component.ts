import { Component, OnInit } from '@angular/core';
import { AngularTokenService } from 'angular-token';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'analysis42';

  constructor(private tokenService: AngularTokenService, private router: Router) {}

  ngOnInit() {
    this.tokenService.validateToken().subscribe(
      result => {
        this.router.navigate( ['dashboard-manager']);
        console.log(result)
      }, 
      error => {
        this.router.navigate( ['login']);
        console.log(error)
      }
    )
  }
}
