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
  position: string;

  constructor(public http: Http) {
    this.name = "";
    this.email = "";
    this.password = "";
    this.skills = new Map();
  }

  setUserName(value: any) {
    this.name = value;
  }

  getUserName(): string {
    return this.name;
  }

  getUserEmail(): string {
    return this.email;
  }

  setUserEmail(value: string) {
    this.email = value;
  }

  getUserPosition(): string {
    return this.position;
  }

  setUserPosition(value: string) {
    this.position = value;
  }

}
