import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BusinessPage } from '../business/business';
import { SocialPage } from '../social/social';
import { UserProvider } from '../../providers/user/user';

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
    this.navCtrl.push(BusinessPage);
  }

  goToSocialPage() {
    this.navCtrl.push(SocialPage);
  }

}
