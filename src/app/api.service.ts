import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { HttpClient } from '@angular/common/http';

const apiUrl = environment.apiUrl;

@Injectable()
export class ApiService {

  constructor(private _http: HttpClient) { }

  getFaqs() {
    return this._http.get(`${apiUrl}/faqs`)
  }

  getFoods() {
    return this._http.get(`${apiUrl}/foods`)
  }

  getVendors() {
    return this._http.get(`${apiUrl}/vendors`)
  }

  getEvents() {
    return this._http.get(`${apiUrl}/events`)
  }

  getSponsors() {
    return this._http.get(`${apiUrl}/sponsors`)
  }

}
