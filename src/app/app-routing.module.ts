import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {LoginComponent} from "./login/login.component";
import {MenuComponent} from "./menu/menu.component";
import {HomeComponent} from "./menu/home/home.component";

const routes: Routes = [
    {path: '', pathMatch: 'full', redirectTo: 'login'},
    {path: 'login', component: LoginComponent},
    {path: 'home', component: MenuComponent},
    {path: 'calendar', component: MenuComponent},
    {path: 'about', component: MenuComponent},
    {path: 'settings', component: MenuComponent},
    {path: 'test', component: HomeComponent},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
