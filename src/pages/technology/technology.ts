import { FirebaseProvider } from './../../providers/firebase/firebase';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FirebaseListObservable } from 'angularfire2/database';

/**
 * Generated class for the TechnologyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-technology',
  templateUrl: 'technology.html',
})
export class TechnologyPage {

  skills: FirebaseListObservable<any[]>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.skills = this.firebaseProvider.getTechSkills();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TechnologyPage');
  }

}
