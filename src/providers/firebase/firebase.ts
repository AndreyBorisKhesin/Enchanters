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

  getBusinessEvents(index) {

    // var index;
    // if(topic == 'Accounting & Actuarial Science') {
    //   index = 0;
    // } else if (topic == 'Client Services') {
    //   index = 1;
    // } else if (topic == 'Loan Management & Insurance') {
    //   index = 2;
    // } else if (topic == 'Marketing') {
    //   index = 3;
    // } else if (topic == 'Public Relations') {
    //   index = 4;
    // } else if (topic == 'Sales & Operations') {
    //   index = 5;
    // } else if (topic == 'Risk Management') {
    //   index = 6;
    // } else if (topic == 'Trading & Capital Markets') {
    //   index = 7;
    // } else if (topic == 'Wealth Management') {
    //   index = 8;
    // }

    var str1 = new String('/skills/business/');
    var str2 = str1.concat(index);
    var path = str2.concat('/events/')
    return this.afd.list(path);
  }

  getBusinessQuestions(index) {
    var str1 = new String('/skills/business/');
    var str2 = str1.concat(index);
    var path = str2.concat('/requests/')
    console.log("In firebase: path is " + path);
    return this.afd.list(path);
  }

  addNewBusinessQuestion(index, addQuestion) {
    var str1 = new String('/skills/business/');
    var str2 = str1.concat(index);
    var path = str2.concat('/requests/');
    console.log("In firebase: path is " + path);
    this.afd.list(path).push(addQuestion);
  }

  getMyQuestions(email) {

  }

  // getUserName(email: string) {
  //   this.afd.list('/users/', { preserveSnapshot: true })
  //     .subscribe(snapshots => {
  //       snapshots.forEach(snapshot => {
  //         console.log(snapshot.val());
  //         console.log(snapshot.val().email);
  //         console.log(email);
  //         if (snapshot.val().email == email) {
  //           return snapshot.val().name;
  //         }
  //       })
  //     });
  // }

  // getUserData() {
  //   console.log("Getting all user data");
  //   let i = 0;
  //   this.afd.list('/users/', { preserveSnapshot: true })
  //     .subscribe(snapshots => {
  //       snapshots.forEach(snapshot => {
  //         i += 1;
  //       })
  //     });
  //   let allUsers = new Array(3);
  //   let names = new Array(i);
  //   let emails = new Array(i);
  //   let preferences = new Array(i);
  //   i = 0;
  //   this.afd.list('/users/', { preserveSnapshot: true })
  //     .subscribe(snapshots => {
  //       snapshots.forEach(snapshot => {
  //         names[i] = snapshot.val().name;
  //         emails[i] = snapshot.val().email;
  //         preferences[i] = snapshot.val().preferences;
  //         i += 1;
  //       })
  //     });
  //   allUsers[0] = names as Array<any>;
  //   allUsers[1] = emails as Array<any>;
  //   allUsers[2] = preferences;
  //   return allUsers;
  // }

  addNewBusinessEvent(index, newEvent) {
    var str1 = new String('/skills/business/');
    var str2 = str1.concat(index);
    var path = str2.concat('/events/');
    console.log("In firebase: path is " + path);
    this.afd.list(path).push(newEvent);
  }

  getSocialEvents() {
    return this.afd.list('/social/events/');
  }

  addNewSocialEvent(newSocialEvent) {
    this.afd.list('/social/events/').push(newSocialEvent);
  }

}
