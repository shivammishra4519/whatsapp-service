import { Injectable } from '@angular/core';
import { env } from '../environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IpService {
  url=env.url;
  constructor(private http:HttpClient) { }

  whiteListIp(data:any): Observable<any> {
    return this.http.post(`${this.url}ip/add`, data,{ withCredentials: true });
  }

  getTokens(): Observable<any> {
    return this.http.post(`${this.url}ip/get`, {},{ withCredentials: true });
  }
}
