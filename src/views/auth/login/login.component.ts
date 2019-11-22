import {Component, OnInit} from '@angular/core';
import {ILoginRequest} from '../../../@types/index.spec';
import {AuthService} from '../../../service/auth.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    request: ILoginRequest;

    constructor(private authService: AuthService) {
        this.request = {};
        console.log(authService);
    }

    ngOnInit() {
    }


    submit() {
        this.authService.login(this.request)
            .subscribe((res) => {
                console.log(res);
            });
    }
}


