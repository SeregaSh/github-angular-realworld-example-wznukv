import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable ,  BehaviorSubject ,  ReplaySubject } from 'rxjs';

import { ApiService, User } from '../../shared';
import { JwtService } from './jwt.service';
import { tap, distinctUntilChanged } from 'rxjs/operators';


@Injectable()
export class UserService {
  private currentUserSubject$ = new BehaviorSubject<User>({} as User);
  public currentUser = this.currentUserSubject$.asObservable().pipe(distinctUntilChanged());

  private isAuthenticatedSubject$ = new BehaviorSubject<boolean>(false);
  public isAuthenticated = this.isAuthenticatedSubject$.asObservable();

  constructor (
    private apiService: ApiService,
    private jwtService: JwtService
  ) {}

  // Verify JWT in localstorage with server & load user's info.
  // This runs once on application startup.
  populate() {
    // If JWT detected, attempt to get & store user's info
    if (this.jwtService.getToken()) {
      this.apiService.get('/user')
      .subscribe(
        data => this.setAuth(data.user),
        err => this.purgeAuth()
      );
    } else {
      // Remove any potential remnants of previous auth states
      this.purgeAuth();
    }
  }

  setAuth(user: User) {
    // Save JWT sent from server in localstorage
    this.jwtService.saveToken(user.token);
    // Set current user data into observable
    this.currentUserSubject$.next(user);
    // Set isAuthenticated to true
    this.isAuthenticatedSubject$.next(true);
  }

  purgeAuth() {
    // Remove JWT from localstorage
    this.jwtService.destroyToken();
    // Set current user to an empty object
    this.currentUserSubject$.next({} as User);
    // Set auth status to false
    this.isAuthenticatedSubject$.next(false);
  }

  attemptAuth(type, credentials): Observable<User> {
    const route = (type === 'login') ? '/login' : '';
    return this.apiService.post('/users' + route, {user: credentials})
      .pipe(tap(data => {
        this.setAuth(data.user);
      }
    ));
  }

  getCurrentUser(): User {
    return this.currentUserSubject$.value;
  }
}
