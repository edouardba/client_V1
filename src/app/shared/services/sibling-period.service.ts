import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class SiblingPeriodService {
    
    constructor(private _http: HttpClient) {}

    private _url = 'assets/data/sibling-period.json';

    getSiblingPeriod(): Observable<any> {
        return this._http.get<any>(this._url);
    }

}