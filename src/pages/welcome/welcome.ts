import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { BusinessPage } from '../business/business';
import { SocialPage } from '../social/social';
import { UserProvider } from '../../providers/user/user';
import { AngularFireAuth } from 'angularfire2/auth';

@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html',
})
export class WelcomePage {
  userName: string;
  userEmail: string;
  userPosition: string;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public userProvider: UserProvider,
    private auth: AngularFireAuth
  ) {
    this.getUserInfo();
  }

  getUserInfo() {
    this.userName = this.userProvider.getUserName();
    this.userEmail = this.userProvider.getUserEmail();
    this.userPosition = this.userProvider.getUserPosition();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WelcomePage');
  }

  goToLearningPage() {
    this.navCtrl.push(BusinessPage);
  }

  goToSocialPage() {
    this.navCtrl.push(SocialPage);
  }

  signOut() {
    this.auth.auth.signOut();
  }

}
