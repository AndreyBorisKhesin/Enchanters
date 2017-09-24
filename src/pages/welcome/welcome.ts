import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { BusinessPage } from '../business/business';
import { SocialPage } from '../social/social';
import { CalendarPage } from '../calendar/calendar';
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
  userPreferences: any;
  arbies: number;
  numQuestions: number;

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
    this.userPreferences = this.userProvider.getUserPreferences();
    this.arbies = this.userProvider.getArbies();
    this.numQuestions = this.userProvider.getNumQuestions();
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
    this.navCtrl.push(CalendarPage, { filter: filter });
  }

  signOut() {
    this.auth.auth.signOut();
  }
}
