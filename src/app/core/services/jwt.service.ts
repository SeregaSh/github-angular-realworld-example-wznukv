import { Injectable } from '@angular/core';


@Injectable()
export class JwtService {

  getToken(): string {
    return localStorage.getItem('jwtToken');
  }

  saveToken(token: string) {
    localStorage.setItem('jwtToken', token);
  }

  destroyToken() {
    localStorage.setItem('jwtToken', null);
  }
}
