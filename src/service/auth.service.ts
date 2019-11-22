import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {ILoginRequest, IUser} from '../@types/index.spec';
import {Observable} from 'rxjs';
import {environment} from '../environments/environment';

@Injectable()
export class AuthService {

    headers = new HttpHeaders({
        'Content-Type': 'application/json'
    });

    constructor(private http: HttpClient) {

    }

    login(request: ILoginRequest): Observable<IUser> {
        return this.http.post<IUser>(`${environment.baseUrl}/accounts/login`, request, {headers: this.headers});
    }

}
