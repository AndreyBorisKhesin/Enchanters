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

  name: string;
  email: string;
  password: string;
  skills: Map<string, [number, boolean]>;

  constructor(public http: Http) {
    this.name = "";
  }

  setUserName(value: any) {
    this.name = value;
  }

  getUserName(): any {
    return this.name;
  }

}
