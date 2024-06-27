import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import{Observable} from'rxjs';
@Injectable({
  providedIn: 'root',
})
export class UsersService {
  url = 'http://localhost:3000/api';

  constructor(private http: HttpClient) {}
  signup(data: object): Observable<any> {
    return this.http.post(this.url + '/signup', data);
  }

  login(userLogin: any): Observable<any> {
    return this.http.post(this.url + '/login', userLogin);
  }
}
