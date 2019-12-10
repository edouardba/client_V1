import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class PersistenceService {

    constructor(private _http: HttpClient) {}

    private _url = 'assets/data/persistence.json';

    getData(): Observable<any> {
        return this._http.get<any>(this._url);
    }

    
}