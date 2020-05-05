import { Component, OnInit } from '@angular/core';
import { User } from '../../../model/User';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user = new User();
  error = '';
  group = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  }, Validators.required);

  constructor(
    private authService: AuthService,
    private router: Router
  ) {
  }

  ngOnInit() {
  }

  saveUser(f: NgForm) {
    this.authService.auth(this.user).subscribe(value => {
      localStorage.setItem(`user`, JSON.stringify(value));
      this.router.navigateByUrl('/home');
    }, error => {
      this.error = 'Es ist ein Fehler beim anmelden aufgetreten';
    });
  }
}
