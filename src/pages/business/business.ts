import { FirebaseProvider } from './../../providers/firebase/firebase';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FirebaseListObservable } from 'angularfire2/database';
import { LeafPage } from '../leaf/leaf';

/**
 * Generated class for the BusinessPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
  // defaultHistory: ['HomePage', 'WelcomePage']
})
@Component({
  selector: 'page-business',
  templateUrl: 'business.html',
})
export class BusinessPage {

  skills: FirebaseListObservable<any[]>;

  constructor(
    public navCtrl: NavController,
    public firebaseProvider: FirebaseProvider,
    public navParams: NavParams
  ) {
    this.skills = this.firebaseProvider.getBusinessSkills();
  }

  ionViewDidEnter() {
    console.log("ionViewDidEnter I'm in business");
  }

  goToLeaf(){
    this.navCtrl.push(LeafPage);
  }

}
