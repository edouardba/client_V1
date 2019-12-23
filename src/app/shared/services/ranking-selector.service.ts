import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class RankingSelectorService {

    constructor() {}

    private rankingList = new BehaviorSubject<any>(null)
    currentRankingList = this.rankingList.asObservable()

    changeRankingList(rankingList) {
        this.rankingList.next(rankingList)
    }
    
}