import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class SignupService {
    
    constructor(private _http: HttpClient) {}

    private baseUrl = environment.baseUrl;

    sendRegistrationForm(registrationForm) {
         
    }

}