import { Injectable } from '@angular/core';


@Injectable()
export class JwtService {

  getToken(): String {
    return localStorage.getItem('jwtToken');
  }

  saveToken(token: String) {
    localStorage.setItem('jwtToken', JSON.stringify(token));
  }

  destroyToken() {
    localStorage.setItem('jwtToken', null);
  }

}
