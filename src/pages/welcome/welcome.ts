import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LearningPage } from '../learning/learning';
import { SocialPage } from '../social/social';
import { UserProvider } from '../../providers/user/user';

@IonicPage()
@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html',
})
export class WelcomePage {
  user: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public userProvider: UserProvider,
  ) {
    this.user = this.userProvider.getUser();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WelcomePage');
    console.log('in the welcome page, user is ' + this.user);
  }

  goToLearningPage() {
    this.navCtrl.push(LearningPage);
  }

  goToSocialPage() {
    this.navCtrl.push(SocialPage);
  }

}
