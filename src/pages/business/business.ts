import { FirebaseProvider } from './../../providers/firebase/firebase';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FirebaseListObservable } from 'angularfire2/database';

/**
 * Generated class for the BusinessPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-business',
  templateUrl: 'business.html',
})
export class BusinessPage {

  names: FirebaseListObservable<any[]>;
  skills: FirebaseListObservable<any[]>;
  newName = '';
  newSkill = '';

  constructor(public navCtrl: NavController, public firebaseProvider: FirebaseProvider) {
    this.names = this.firebaseProvider.getNames();
    this.skills = this.firebaseProvider.getSkills();
  }


}
