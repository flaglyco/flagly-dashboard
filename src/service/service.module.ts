import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {LoggingInterceptor} from './interceptor/LoggingInterceptor';
import {AuthService} from './auth.service';


export const httpInterceptorProviders = [
    {provide: HTTP_INTERCEPTORS, useClass: LoggingInterceptor, multi: true}
];

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        HttpClientModule
    ],
    providers: [httpInterceptorProviders, AuthService]
})
export class ServiceModule {
}
