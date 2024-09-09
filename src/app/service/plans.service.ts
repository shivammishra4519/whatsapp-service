import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { env } from '../environment';
@Injectable({
  providedIn: 'root'
})
export class PlansService {

  url=env.url;
  constructor(private http:HttpClient) { }

  addPlan(data: any): Observable<any> {
    return this.http.post(`${this.url}plan/add`, data,{ withCredentials: true });
  }
  addFreeTrail(data: any): Observable<any> {
    return this.http.post(`${this.url}plan/add/free`, data,{ withCredentials: true });
  }

  getAllPlan(): Observable<any> {
    return this.http.post(`${this.url}plan/get`, {},{ withCredentials: true });
  }

  buyPlan(data:any): Observable<any> {
    return this.http.post(`${this.url}plan/buy`, data,{ withCredentials: true });
  }

  deletePlan(data:any): Observable<any> {
    
    return this.http.post(`${this.url}plan/delete`, data,{ withCredentials: true });
  }

  verfiyPayment(data:any): Observable<any> {
    return this.http.post(`${this.url}plan/verify/payment`, data,{ withCredentials: true });
  }


  paymentRequest(): Observable<any> {
    return this.http.post(`${this.url}payment/requests`, {},{ withCredentials: true });
  }

  getActivePlans(): Observable<any> {
    return this.http.post(`${this.url}plan/active/plans`, {},{ withCredentials: true });
  }

  getCurrentPlan(): Observable<any> {
    return this.http.post(`${this.url}plan/active/plan/user`, {},{ withCredentials: true });
  }
  getFreePlan(): Observable<any> {
    return this.http.post(`${this.url}plan/get/plan/free`, {},{ withCredentials: true });
  }

}
