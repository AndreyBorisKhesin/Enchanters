import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import 'rxjs/add/operator/map';

/*
  Generated class for the FirebaseProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class FirebaseProvider {

  constructor(public afd: AngularFireDatabase) { }

  getNames() {
    return this.afd.list('/names/');
  }

  addItem(newName) {
    this.afd.list('/names/').push(newName);
  }

  removeItem(id) {
    this.afd.list('/names/').remove(id);
  }

  getBusinessSkills() {
    return this.afd.list('/skills/business/');
  }

  getTechSkills() {
    return this.afd.list('/skills/technology/');
  }

  addNewUser(newUserName) {
    var str1 = new String("/users/");
    var str2 = str1.concat(newUserName);
    var path = str2.concat("/name/");
    this.afd.list(path).push(newUserName);
  }

  addNewEmail(newUserName, newUserEmail) {
    var str1 = new String("/users/");
    var str2 = str1.concat(newUserName);
    var path = str2.concat("/email/");
    this.afd.list(path).push(newUserEmail);
  }



}
