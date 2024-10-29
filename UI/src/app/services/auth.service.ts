

// import { HttpClient } from '@angular/common/http';
// import { Injectable } from '@angular/core';
// import { Router } from '@angular/router';
// import { JwtHelperService } from '@auth0/angular-jwt';

// import { Observable } from 'rxjs/internal/Observable';
// import { of } from 'rxjs/internal/observable/of';
// import { catchError } from 'rxjs/internal/operators/catchError';
// import { map } from 'rxjs/internal/operators/map';

// @Injectable({
//   providedIn: 'root'
// })
// export class AuthService {

//   private apiUrl = 'https://localhost:7141/api/Auth';
  
 
//   constructor(private http: HttpClient, public jwtHelper: JwtHelperService, private router: Router) {
   
//   }

//   login(email: string, password: string): Observable<any> {
//     return this.http.post<any>(`${this.apiUrl}/login`, { email, password }).pipe(
//       map(response => {
        
//         return response;
//       }),
//       catchError(error => {
//         console.error('Login error:', error);
//         return of(error);
//       })
//     );
//   }

 
//   getRole(): string | null {
//     const token = localStorage.getItem('token');
//     if (token) {
//       const decodedToken = this.jwtHelper.decodeToken(token);
//       return decodedToken?.['http://schemas.microsoft.com/ws/2008/06/identity/claims/role'] || null;
//     }
//     return null;
//   }

//   isAuthenticated(): boolean {
//     const token = localStorage.getItem('token');
//     return token !== null && !this.jwtHelper.isTokenExpired(token);
//   }

//   getToken(): string | null {
//     return localStorage.getItem('token');
//   }

  
//   logout() {
//     localStorage.removeItem('token');

//     localStorage.removeItem('userId'); // Clear userId from localStorage
//     this.router.navigate(['/login']);
   
//   }



  
// }


import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = 'https://localhost:7141/api/Auth';
  private userRoleSubject = new BehaviorSubject<string | null>(localStorage.getItem('role')); // Initialize with localStorage
  userRole$ = this.userRoleSubject.asObservable();

  constructor(private http: HttpClient, public jwtHelper: JwtHelperService, private router: Router) {}

  login(email: string, password: string): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/login`, { email, password }).pipe(
      map(response => {
        if (response && response.token) {
          localStorage.setItem('token', response.token);
          const decodedToken = this.jwtHelper.decodeToken(response.token);
          const role = decodedToken['http://schemas.microsoft.com/ws/2008/06/identity/claims/role'];
          localStorage.setItem('role', role);
          this.userRoleSubject.next(role); // Update the BehaviorSubject
        }
        return response;
      }),
      catchError(error => {
        console.error('Login error:', error);
        return of(error);
      })
    );
  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('userId');
    localStorage.removeItem('role');
    this.userRoleSubject.next(null); // Reset role on logout
    this.router.navigate(['/login']);
  }

  getRole(): string | null {
    return localStorage.getItem('role');
  }

  isAuthenticated(): boolean {
    const token = localStorage.getItem('token');
    return token !== null && !this.jwtHelper.isTokenExpired(token);
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

 
}
