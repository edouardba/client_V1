import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class ContextService {

    constructor() {}

    private repositoryId = new BehaviorSubject<any>(null)
    currentRepositoryId = this.repositoryId.asObservable();

    changeRepositoryId(repository_id) {
        this.repositoryId.next(repository_id)
    }

    private companyId = new BehaviorSubject<any>(null);
    currentCompanyId = this.companyId.asObservable();

    changeCompanyid(company_id) {
        this.companyId.next(company_id)
    }

}