import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LayoutModule} from '../views/layout/layout.module';
import {ServiceModule} from '../service/service.module';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        LayoutModule,
        ServiceModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
