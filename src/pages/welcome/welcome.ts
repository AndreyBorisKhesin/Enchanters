import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { BusinessPage } from '../business/business';
import { SocialPage } from '../social/social';
import { CalendarPage } from '../calendar/calendar';
import { UserProvider } from '../../providers/user/user';

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

  goToCalendar(filter: string) {
    this.navCtrl.push(CalendarPage, {filter: filter});
  }

}
