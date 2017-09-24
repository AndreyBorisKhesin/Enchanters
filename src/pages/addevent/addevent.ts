import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UserProvider } from '../../providers/user/user';
import { FirebaseProvider } from '../../providers/firebase/firebase';

/**
 * Generated class for the AddeventPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-addevent',
  templateUrl: 'addevent.html',
})
export class AddeventPage {
  newEvent = {
    date: '',
    description: '',
    location: '',
    name: '',
    organizer: ''
  };

  topicId: number;
  filter: string;
  title: string;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public userProvider: UserProvider,
              public firebaseProvider: FirebaseProvider) {
    this.filter = this.navParams.get('filter');
    console.log("In addevent, filter = " + this.filter);

    switch (this.filter) {
      case "myQuestions":
        this.title = "My Questions";
        // This is going to be difficult
        break;
      case "mentor-Accounting & Actuarial Science":
        this.title = "Accounting & Actuarial Science Questions";
        this.topicId = 0;
        break;
      case "mentor-Client Services":
        this.title = "Client Services Questions";
        this.topicId = 1;
        break;
      case "mentor-Loan Management & Insurance":
        this.title = "Loan & Insurance Questions";
        this.topicId = 2;
        break;
      case "mentor-Marketing":
        this.title = "Marketing Questions";
        this.topicId = 3;
        break;
      case "mentor-Public Relations":
        this.title = "Public Relations Questions";
        this.topicId = 4;
        break;
      case "mentor-Sales & Operations":
        this.title = "Sales & Operations Questions";
        this.topicId = 5;
        break;
      case "mentor-Risk Management":
        this.title = "Risk Management Questions";
        this.topicId = 6;
        break;
      case "Trading & Capital Markets":
        this.title = "Trading & Capital Markets Questions";
        this.topicId = 7;
        break;
      case "mentor-Wealth Management":
        this.title = "Wealth Management Questions";
        this.topicId = 8;
        break;
      default:
        this.title = "Default Question";
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddeventPage');
  }

  addEvent() {
    this.newEvent.organizer = this.userProvider.getUserName();
    console.log("In addevent, organizer = " + this.newEvent.organizer);
    this.firebaseProvider.addNewBusinessEvent(this.topicId, this.newEvent);
    
    this.navCtrl.pop();
  }

}
