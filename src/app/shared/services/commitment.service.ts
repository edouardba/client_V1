import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable()
export class CommitmentService {

    constructor(private _http: HttpClient) {}

    private _url = 'assets/data/commitment.json';

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