import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UserProvider } from '../../providers/user/user';
import { FirebaseProvider } from '../../providers/firebase/firebase';

/**
 * Generated class for the AddsocialPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-addsocial',
  templateUrl: 'addsocial.html',
})
export class AddsocialPage {

  newSocialEvent = {
    date: '',
    description: '',
    location: '',
    name: '',
    organizer: ''
  };

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public userProvider: UserProvider,
              public firebaseProvider: FirebaseProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddsocialPage');
  }

  addSocialEvent() {
    this.newSocialEvent.organizer = this.userProvider.getUserName();
    console.log("In addsocial, organizer = " + this.newSocialEvent.organizer);
    this.firebaseProvider.addNewSocialEvent(this.newSocialEvent);
    this.navCtrl.pop();
  }
}
