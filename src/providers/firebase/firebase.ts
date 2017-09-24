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
    var str1 = new String('/skills/business/');
    var str2 = str1.concat(index);
    var path = str2.concat('/events/')
    return this.afd.list(path);
  }

  getTechnologyEvents(index) {
    var path = '/skills/technology/';
    path = path + index + '/events/';
    console.log("path in firebase: " + path);
    return this.afd.list(path);
  }

  getBusinessQuestions(index) {
    var str1 = new String('/skills/business/');
    var str2 = str1.concat(index as string);
    var path = str2.concat('/requests/')
    console.log("In firebase: path is " + path);
    return this.afd.list(path);
  }

  getTechnologyQuestions(index) {
    var path = '/skills/technology/';
    path = path + index + '/requests/';
    console.log("path in firebase: " + path);
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
    // not happening
  }

  addNewBusinessEvent(index, newEvent) {
    var str1 = new String('/skills/business/');
    var str2 = str1.concat(index);
    var path = str2.concat('/events/');
    console.log("In firebase: path is " + path);
    this.afd.list(path).push(newEvent);
  }

  getSocialEvents() {
    var allSocialEvents = new Array();
    this.afd.list('/social/events/', { preserveSnapshot: true})
      .subscribe(snapshots=>{
        snapshots.forEach(snapshot => {
	  allSocialEvents.push(snapshot.val());
        });
      });
    return allSocialEvents;
  }

  addNewSocialEvent(newSocialEvent) {
    this.afd.list('/social/events/').push(newSocialEvent);
  }

}
