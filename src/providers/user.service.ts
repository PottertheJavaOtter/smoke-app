import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/finally';
import 'rxjs/add/operator/map';

import { Const } from './constants'
import { User } from '../models/user.d';

@Injectable()
export class UserService {

  private apiUrl: string;

  constructor(public http: Http) {
    this.apiUrl = Const.API_URL;
  }

  getUser(pin: string): Promise<User> {
    let httpUrl = this.apiUrl + '/user/password/' + pin;
    return this.http.get(httpUrl)
      .toPromise()
      .then(response => response.json() as User)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    return Promise.reject(error.message || error);
  }
}
