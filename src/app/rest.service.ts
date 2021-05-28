import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { APIjson } from './APIjson';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private http: HttpClient) { }

  url = "https://api.sampleapis.com/codingresources/codingResources";

  getData() {
    return this.http.get<APIjson[]>(this.url);
  }


}
