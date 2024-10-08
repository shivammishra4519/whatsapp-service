import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { env } from '../environment';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
url=env.url
  constructor(private http:HttpClient) { }

  

  userRegister(data: any): Observable<any> {
    return this.http.post(`${this.url}user/registration`, data,);
  }

  userLogin(data: any): Observable<any> {
    return this.http.post(`${this.url}user/login`, data,{ withCredentials: true });
  }

  // loginWhatsapp(data:any):Observable<any>{
  //   return this.http.post(`${this.url}whatsapp/whastapp`, data,{ withCredentials: true })
  // }

  loginWhatsapp(): Observable<Blob> {
    console.log("methodcalss in service")
    return this.http.post(`${this.url}whatsapp/whatsapp`, {}, {
      responseType: 'blob',
      withCredentials: true
    },);
  }
  recoverSession(): Observable<Blob> {
    
    return this.http.post(`${this.url}whatsapp/check/session`, {}, {
      responseType: 'blob',
      withCredentials: true
    },);
  }

  checkStatus(data:any):Observable<any>{
    return this.http.post(`${this.url}whatsapp/check/status`, data,{ withCredentials: true })
  }

  adminRegister(data:any):Observable<any>{
    return this.http.post(`${this.url}user/admin/register`, data,{ withCredentials: true })
  }

  logout():Observable<any>{
    return this.http.post(`${this.url}user/logout`, {},{ withCredentials: true })
  }

  getAllUser():Observable<any>{
    return this.http.post(`${this.url}user/get`, {},{ withCredentials: true })
  }


  DeleteSession():Observable<any>{
    return this.http.post(`${this.url}message/delete`, {},{ withCredentials: true })
  }


  getSession():Observable<any>{
    return this.http.post(`${this.url}user/get/sessions`, {},{ withCredentials: true })
  }

}
