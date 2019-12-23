import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";

@Injectable()
export class SelectRepositoriesService {
    
    constructor(private http: HttpClient) {}

    private baseUrl = environment.baseUrl;

    getRepositories(): Observable<any> {
        return this.http.get<any>(this.baseUrl + '/api/v1/repositories');
    }


}