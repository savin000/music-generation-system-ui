import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {
  isRegistrationFormVisible: boolean = false;

  constructor() {
  }

  ngOnInit(): void {
  }

  isSignUpButtonClicked(clicked: boolean) {
    this.isRegistrationFormVisible = clicked;
  }

}
