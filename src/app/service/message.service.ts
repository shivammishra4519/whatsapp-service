import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { env } from '../environment';
@Injectable({
  providedIn: 'root'
})
export class MessageService {

  url=env.url
  constructor(private http:HttpClient) { }

  sendQuickMessage(data: any): Observable<any> {
    return this.http.post(`${this.url}whatsapp/sendmsg/quick`, data,{ withCredentials: true });
  }

  sendQuickMessageMulti(data: any): Observable<any> {
    return this.http.post(`${this.url}whatsapp/sendmsg/multi`, data,{ withCredentials: true });
  }

  viewQuickMessage(): Observable<any> {
    return this.http.post(`${this.url}message/viewmessage`, {},{ withCredentials: true });
  }
  incommingMessages(): Observable<any> {
    return this.http.post(`${this.url}message/incomming`, {},{ withCredentials: true });
  }
}
