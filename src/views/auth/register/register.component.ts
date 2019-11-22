import {Component, OnInit} from '@angular/core';
import {IRegisterRequest} from '../../../@types/index.spec';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

    request: IRegisterRequest;

    constructor() {
    }

    ngOnInit() {
    }

}
