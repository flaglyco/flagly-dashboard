import {NgModule} from '@angular/core';
import {LoginComponent} from './login/login.component';
import {RouterModule, Routes} from '@angular/router';
import {RegisterComponent} from './register/register.component';


const routes: Routes = [
    {
        path: 'login',
        component: LoginComponent
    }, {
        path: 'register',
        component: RegisterComponent
    }, {
        path: '',
        redirectTo: 'login'
    }];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    declarations: [LoginComponent, RegisterComponent]
})

export class AuthModule {
}
