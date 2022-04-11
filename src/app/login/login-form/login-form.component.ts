import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Router} from "@angular/router";

@Component({
    selector: 'app-login-form',
    templateUrl: './login-form.component.html',
    styleUrls: ['./login-form.component.less']
})
export class LoginFormComponent implements OnInit {
    @Output() signUpButtonClick: EventEmitter<boolean> = new EventEmitter();

    constructor(private router: Router) {
    }

    ngOnInit(): void {
    }

    logInButtonClicked() {
        this.router.navigate(['home']);
    }

    signUpButtonClicked() {
        this.signUpButtonClick.emit(true)
    }
}
