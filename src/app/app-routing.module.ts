import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthLayoutComponent} from '../views/layout/auth-layout/auth-layout.component';


const routes: Routes = [
    {
        path: 'auth',
        component: AuthLayoutComponent,
        // canActivate: [GuestGuard],
        loadChildren: '../views/auth/auth.module#AuthModule'
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
