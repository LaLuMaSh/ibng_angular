import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent implements OnInit {

  loggedOut = false;

  constructor() {
  }

  ngOnInit() {
  }

  logout() {
    localStorage.removeItem('user');
    this.loggedOut = true;
  }
}
