import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class PersistenceService {

    constructor(private _http: HttpClient) {}

    private _url = 'assets/data/persistence.json';

    private userSelected = new BehaviorSubject<any>(null)
    currentUserSelected = this.userSelected.asObservable()

    changeSelectedUser(item) {
        this.userSelected.next(item)
    }

    private chartUserData = new BehaviorSubject<any>(null)
    currentchartUserData = this.chartUserData.asObservable()

    changeChartUserData(data) {
        this.chartUserData.next(data)
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