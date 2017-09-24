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
  arbies: number;
  password: string;
  position: string;
  preferences: Map<string, number>;
  arbies: number;
  numQuestions: number;

  constructor(public http: Http) {
    this.name = "";
    this.email = "";
    this.arbies = 0;
    this.password = "";
    this.position = "";
    this.preferences = new Map();
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

  getUserPreferences(): any {
    return this.preferences;
  }

  setUserPreferences(value: any) {
    this.preferences = value;
  }

  setArbies(value: any) {
    this.arbies = value;
  }

  getArbies() {
    return this.arbies;
  }

  getNumQuestions() {
    return this.numQuestions;
  }

  setNumQuestions(value: number) {
    this.numQuestions = value;
  }
}
