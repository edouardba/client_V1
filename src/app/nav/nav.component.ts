import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularTokenService } from 'angular-token';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(private router: Router, 
              private tokenService: AngularTokenService) { }

  ngOnInit() {
  }

  isMenuOpen = true;
  contentMargin = 240;
  show = true;

  onToolbarMenuToggle() {
    this.isMenuOpen = !this.isMenuOpen;

    if (!this.isMenuOpen) {
      this.contentMargin = 70;
    } else {
      this.contentMargin = 240;
    }
  }

  onSubmit() {
    this.tokenService.signOut().subscribe(
      result => {
        console.log(result)
        this.router.navigate( ['login']);
      }, 
      error => {
        console.log(error)
      }
    )
  }

}
