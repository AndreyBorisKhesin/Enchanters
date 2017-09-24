import { FirebaseProvider } from './../../providers/firebase/firebase';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { FirebaseListObservable } from 'angularfire2/database';
import { LeafPage } from '../leaf/leaf';
import { TechnologyPage } from '../technology/technology';

/**
 * Generated class for the BusinessPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-business',
  templateUrl: 'business.html',
  styleUrls: ['/pages/business/business.scss']
})
export class BusinessPage {

  public skills: FirebaseListObservable<any[]>;

  constructor(
    public navCtrl: NavController,
    public firebaseProvider: FirebaseProvider,
    public navParams: NavParams
  ) {
    this.skills = this.firebaseProvider.getBusinessSkills();
  }

  goToLeaf(topic: any) {
    this.navCtrl.push(LeafPage, {topic: topic});
  }

  goToTech() {
    this.navCtrl.push(TechnologyPage);
  }
}
