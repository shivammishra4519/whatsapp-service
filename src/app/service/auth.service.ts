import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { env } from '../environment';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = `${env.url}current-user`; // Update with your API URL
  private role: string = '';

  constructor(private http: HttpClient) {}

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

  // Check if the user is an admin
  isAdmin(): Observable<boolean> {
    const url = `${env.url}user/check/role`;
    return new Observable(observer => {
      this.http.get<{ message: string, role: string }>(url, { withCredentials: true }).subscribe(
        response => {
          if (response.role === 'admin') {
            observer.next(true);
          } else {
            observer.next(false);
          }
          observer.complete();
        },
        error => {
          console.error('Error in isAdmin:', error);
          observer.next(false);
          observer.complete();
        }
      );
    });
  }
  

  // Fetch the user's role and return it as an Observable
  checkRole(): Observable<string> {
    const url = `${env.url}user/check/role`;
    return this.http.get<{ role: string }>(url, { withCredentials: true }).pipe(
      map(response => {
        this.role = response.role;
        return this.role;
      }),
      catchError(error => {
        console.error('Error occurred while fetching role:', error);
        // You can either rethrow the error or return a fallback value, e.g., 'guest'
        return of('user'); // Return 'guest' as a default role if an error occurs
      })
    );
  }

  // Get the cached role value
  getRole(): string {
    return this.role;
  }
}
