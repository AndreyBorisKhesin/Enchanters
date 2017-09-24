import { Component } from '@angular/core';
import { NavController, NavParams, ModalController } from 'ionic-angular';
import { FirebaseProvider } from '../../providers/firebase/firebase';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AddeventPage } from '../addevent/addevent';

/**
 * Generated class for the CalendarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-calendar',
  templateUrl: 'calendar.html',
  styleUrls: ['/pages/calendar/calendar.scss'],
})
export class CalendarPage {

  filter: string;
  title: string;
  topicId: number;
  requests: FirebaseListObservable<any[]>;
  isMentor: boolean;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public db: FirebaseProvider,
    public modelController: ModalController,
  ) {
    this.isMentor = true;
    this.filter = this.navParams.get('filter');
    console.log("In calendar, filter = " + this.filter);

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

    // get requests from firebase
    if (this.isMentor){
      console.log("Is mentor");
      this.requests = this.db.getBusinessQuestions(this.topicId);
    } else {
      console.log("Not mentor");
      this.requests = this.db.getBusinessEvents(this.topicId);
    }

  }

  goToQuestion() {
    console.log("Going to question");
  }

  goToEvent() {
    console.log("Going to event");
  }

  addEvent() {
    this.navCtrl.push(AddeventPage, {filter: this.filter});
  }

}
