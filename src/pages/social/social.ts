import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { CalendarPage } from '../calendar/calendar';
import { FirebaseProvider } from '../../providers/firebase/firebase';
import { FirebaseListObservable } from 'angularfire2/database';
import { AddsocialPage } from '../addsocial/addsocial';

/**
 * Generated class for the SocialPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-social',
  templateUrl: 'social.html',
})
export class SocialPage {
  events: any[];

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public firebaseProvider: FirebaseProvider,
              public ToastController: ToastController) {
    this.events = this.firebaseProvider.getSocialEvents();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SocialPage');
  }

  addEvent() {
    this.navCtrl.push(AddsocialPage);
  }

  register() {
    let toast = this.ToastController.create({
      message: 'You have successfully registered for event!',
      duration: 1500,
      position: 'middle',
    });
    toast.present();
  }

}
