import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class LoginGithubService {
    
    constructor(private _http: HttpClient) {}

    private _url = 'http://api.devolut.io/auth/github';

    login(): Observable<any> {
        return this._http.get<any>(this._url);
    }

}