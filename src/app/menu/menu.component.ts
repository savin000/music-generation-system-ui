import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.less']
})
export class MenuComponent implements OnInit {
  homeTabIsSelected: boolean = false;
  calendarTabIsSelected: boolean = false;
  aboutTabIsSelected: boolean = false;
  settingsTabIsSelected: boolean = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
    if (this.router.url == "/home") {
      this.homeTabIsSelected = true;
    }

    if (this.router.url == "/calendar") {
      this.calendarTabIsSelected = true;
    }

    if (this.router.url == "/about") {
      this.aboutTabIsSelected = true;
    }

    if (this.router.url == "/settings") {
      this.settingsTabIsSelected = true;
    }
  }

  openHomeTab() {
    this.router.navigate(['home']);
  }

  openCalendarTab() {
    this.router.navigate(['calendar']);
  }

  openAboutTab() {
    this.router.navigate(['about']);
  }

  openSettingsTab() {
    this.router.navigate(['settings']);
  }

  logOut() {
    this.router.navigate(['login']);
  }
}
