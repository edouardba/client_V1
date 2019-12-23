import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class PersistenceService {

    constructor(private _http: HttpClient) {}

    private _url = 'assets/data/persistence.json';

    getReport(persistence_id, repository_id): Observable<any> {
        return this._http.get<any>(this._url);
    }



    getRankingList(): Observable<any> {
        return this._http.get<any>(this._url);
    }

    getDetailsByUserId(userId): Observable<any> {
        return this._http.get<any>(this._url);
    }

    getChartDataByUserId(userId): Observable<any> {
        return this._http.get<any>(this._url);
    }
    
}