import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../services/user.service';
import { UserData } from '../../../model/User';

@Component({
  selector: 'app-user-overview',
  templateUrl: './user-overview.component.html',
  styleUrls: ['./user-overview.component.scss']
})
export class UserOverviewComponent implements OnInit {

  user: UserData;
  error = '';

  constructor(private userService: UserService) {
  }

  ngOnInit() {
    this.userService.getUser().subscribe(value => {
      this.user = value;
    }, error1 => {
      this.error = 'Fehler beim laden des Benutzers...';
    });
  }

}
