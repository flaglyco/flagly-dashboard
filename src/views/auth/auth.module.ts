import {NgModule} from '@angular/core';
import {LoginComponent} from './login/login.component';
import {RouterModule, Routes} from '@angular/router';
import {RegisterComponent} from './register/register.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';


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
        RouterModule.forChild(routes),
        FormsModule,
        HttpClientModule
    ],
    declarations: [LoginComponent, RegisterComponent]
})

export class AuthModule {
}
