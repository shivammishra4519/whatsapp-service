import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { env } from '../environment';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = `${env.url}current-user`; // Update with your API URL

  constructor(private http: HttpClient) { }

  // Check if the user is logged in
  isLoggedIn(): Observable<boolean> {
    return new Observable(observer => {
      this.http.get(this.apiUrl, { withCredentials: true }).subscribe(
        response => {
          observer.next(true);
          observer.complete();
        },
        error => {
          observer.next(false);
          observer.complete();
        }
      );
    });
  }

isAdmin():Observable<boolean>{
 
  const url=`${env.url}user/check/role`
  return new Observable(observer => {
    this.http.get(url, { withCredentials: true }).subscribe(
      response => {
        observer.next(true);
        observer.complete();
      },
      error => {
        observer.next(false);
        observer.complete();
      }
    );
  });
}

}
