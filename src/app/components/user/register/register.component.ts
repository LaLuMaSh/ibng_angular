import { Component, OnInit } from '@angular/core';
import { RegisterUser } from '../../../model/User';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  user = new RegisterUser();
  message = '';
  registerGroup = new FormGroup({
    registerUsername: new FormControl(''),
    registerNickname: new FormControl(''),
    registerPassword: new FormControl(''),
  }, Validators.required);

  constructor(
    private authService: AuthService
  ) {
  }

  ngOnInit() {
  }

  sendRegisterRequest(f: NgForm) {
    this.authService.register(this.user).subscribe(value => {
      console.log(value);
      this.message = 'Der Benutzer ' + value.username + ' wurde erfoglreich erstellt.';
    }, error => {
      console.log('error');
      console.log(error);
      this.message = error.message;
    });
  }
}
