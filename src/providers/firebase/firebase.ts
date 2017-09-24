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

  addNewUser(signupData) {
    this.afd.list("/users/").push(signupData);
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

  getBusinessQuestions(index) {

    var str1 = new String('/skills/business/');
    var str2 = str1.concat(index);
    var path =  str2.concat('/requests/')
    console.log("In firebase: path is " + path);
    return this.afd.list(path);
  }

  addNewBusinessQuestion(index, newQuestion) {
    var str1 = new String('/skills/business/');
    var str2 = str1.concat(index);
    var path =  str2.concat('/requests/')
    this.afd.list(path).push(newQuestion);
  }

}
