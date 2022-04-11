import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {LoginComponent} from './login/login.component';
import {LoginFormComponent} from './login/login-form/login-form.component';
import {RegistrationFormComponent} from './login/registration-form/registration-form.component';
import {RouterModule} from "@angular/router";
import {AppRoutingModule} from "./app-routing.module";
import {MenuComponent} from './menu/menu.component';
import {CalendarComponent} from './menu/calendar/calendar.component';
import {AboutComponent} from './menu/about/about.component';
import {HomeComponent} from './menu/home/home.component';
import {SettingsComponent} from './menu/settings/settings.component';
import {NgChartsModule} from "ng2-charts";
import {OutsideClickDirective} from './directives/outside-click.directive';
import {HttpClientModule} from "@angular/common/http";

@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        LoginFormComponent,
        RegistrationFormComponent,
        MenuComponent,
        CalendarComponent,
        AboutComponent,
        HomeComponent,
        SettingsComponent,
        OutsideClickDirective
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        RouterModule,
        NgChartsModule,
        HttpClientModule,
    ],
    providers: [HttpClientModule],
    bootstrap: [AppComponent]
})
export class AppModule {
}
