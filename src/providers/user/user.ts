import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the UserProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/

@Injectable()
export class UserProvider {

  user: any;

  constructor(public http: Http) {
    this.user = "";
  }

  setUser(value: any) {
    this.user = value;
  }

  getUser(): any {
    return this.user;
  }

}
