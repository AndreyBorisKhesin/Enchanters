import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FirebaseProvider } from '../../providers/firebase/firebase';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

/**
 * Generated class for the CalendarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-calendar',
  templateUrl: 'calendar.html',
})
export class CalendarPage {

  filter: string;
  title: string;
  topicId: number;
  requests: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.filter = this.navParams.get('filter');
    console.log("In calendar, filter = " + this.filter);

    switch (this.filter) {
      case "myQuestions":
        this.title = "My Questions";
        // This is going to be difficult
        break;
      case "mentor-Accounting & Actuarial Science":
        this.title = "Accounting & Acturial Science Questions";
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
      case "mentor-Trading & Capital Markets":
        this.title = "Trading & Capital Markets Questions";
        this.topicId = 7;
        break;
      case "mentor-Wealth Management":
        this.title = "Wealth Management Questions";
        this.topicId = 8;
        break;
      case "learn-Accounting & Acturial Science":
        this.title = "Accounting & Actuarial Science Help";
        this.topicId = 0;
        break;
      case "learn-Client Services":
        this.title = "Client Services Help";
        this.topicId = 1;
        break;
      case "learn-Loan Management & Insurance":
        this.title = "Loan & Insurance Help";
        this.topicId = 2;
        break;
      case "learn-Marketing":
        this.title = "Marketing Help";
        this.topicId = 3;
        break;
      case "learn-Public Relations":
        this.title = "Public Relations Help";
        this.topicId = 4;
        break;
      case "learn-Sales & Operations":
        this.title = "Sales & Operations Help";
        this.topicId = 5;
        break;
      case "learn-Risk Management":
        this.title = "Risk Management Help";
        this.topicId = 6;
        break;
      case "learn-Trading & Capital Markets":
        this.title = "Trading & Capital Markets Help";
        this.topicId = 7;
        break;
      case "learn-Wealth Management":
        this.title = "Wealth Management Help";
        this.topicId = 8;
        break;
      default:
        this.title = "Default Calendar";
    }

    // get requests from firebase


  }

  ionViewDidLoad() {
  }

}
