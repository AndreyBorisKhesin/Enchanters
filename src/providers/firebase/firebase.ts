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
    var newPath = str2.concat("/counter/");
    this.afd.list(newPath).push(0);
  }

  addNewEmail(newUserName, newUserEmail) {
    var str1 = new String("/users/");
    var str2 = str1.concat(newUserName);
    var path = str2.concat("/email/");
    this.afd.list(path).push(newUserEmail);
  }

  getBusinessEvents(topic) {

    var index;
    if(topic == 'Accounting & Actuarial Science') {
      index = 0;
    } else if (topic == 'Client Services') {
      index = 1;
    } else if (topic == 'Loan Management & Insurance') {
      index = 2;
    } else if (topic == 'Marketing') {
      index = 3;
    } else if (topic == 'Public Relations') {
      index = 4;
    } else if (topic == 'Sales & Operations') {
      index = 5;
    } else if (topic == 'Risk Management') {
      index = 6;
    } else if (topic == 'Trading & Capital Markets') {
      index = 7;
    } else if (topic == 'Wealth Management') {
      index = 8;
    }

    var str1 = new String('/skills/business/');
    var str2 = str1.concat(index);
    var path =  str2.concat('/events/')
    return this.afd.list(path);
  }

  getBusinessQuestions(topic) {

    var index;
    if(topic == 'Accounting & Actuarial Science') {
      index = 0;
    } else if (topic == 'Client Services') {
      index = 1;
    } else if (topic == 'Loan Management & Insurance') {
      index = 2;
    } else if (topic == 'Marketing') {
      index = 3;
    } else if (topic == 'Public Relations') {
      index = 4;
    } else if (topic == 'Sales & Operations') {
      index = 5;
    } else if (topic == 'Risk Management') {
      index = 6;
    } else if (topic == 'Trading & Capital Markets') {
      index = 7;
    } else if (topic == 'Wealth Management') {
      index = 8;
    }

    var str1 = new String('/skills/business/');
    var str2 = str1.concat(index);
    var path =  str2.concat('/requests/')
    return this.afd.list(path);
  }

}
