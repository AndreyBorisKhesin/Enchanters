import { Component } from '@angular/core';
import { ToastController, NavController, NavParams, ModalController } from 'ionic-angular';
import { FirebaseProvider } from '../../providers/firebase/firebase';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AddeventPage } from '../addevent/addevent';
import { UserProvider } from '../../providers/user/user';

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
  isTech: boolean;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public db: FirebaseProvider,
    public modelController: ModalController,
    public userProvider: UserProvider,
    public ToastController: ToastController,
  ) {
    this.isMentor = false;
    this.isTech = false;
    this.filter = this.navParams.get('filter');

    switch (this.filter) {
      case "myQuestions":
        this.title = "My Questions";
        // This is going to be difficult
        break;
      case "mentor-Accounting & Actuarial Science":
        this.title = "Accounting & Actuarial Science Questions";
        this.topicId = 0;
        this.isMentor = true;
        break;
      case "mentor-Client Services":
        this.title = "Client Services Questions";
        this.topicId = 1;
        this.isMentor = true;
        break;
      case "mentor-Loan Management & Insurance":
        this.title = "Loan & Insurance Questions";
        this.topicId = 2;
        this.isMentor = true;
        break;
      case "mentor-Marketing":
        this.title = "Marketing Questions";
        this.topicId = 3;
        this.isMentor = true;
        break;
      case "mentor-Public Relations":
        this.title = "Public Relations Questions";
        this.topicId = 4;
        this.isMentor = true;
        break;
      case "mentor-Sales & Operations":
        this.title = "Sales & Operations Questions";
        this.topicId = 5;
        this.isMentor = true;
        break;
      case "mentor-Risk Management":
        this.title = "Risk Management Questions";
        this.topicId = 6;
        this.isMentor = true;
        break;
      case "mentor-Trading & Capital Markets":
        this.title = "Trading & Capital Markets Questions";
        this.topicId = 7;
        this.isMentor = true;
        break;
      case "mentor-Wealth Management":
        this.title = "Wealth Management Questions";
        this.topicId = 8;
        this.isMentor = true;
        break;
      case "learn-Accounting & Actuarial Science":
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
      case "mentor-Computer Architecture":
        this.title = "Computer Architecture";
        this.topicId = 0;
        this.isTech = true;
        this.isMentor = true;
        break;
      case "mentor-Security & Cryptography":
        this.title = "Security & Cryptography";
        this.topicId = 1;
        this.isTech = true;
        this.isMentor = true;
        break;
      case "mentor-Operating Systems":
        this.title = "Operating Systems";
        this.topicId = 2;
        this.isTech = true;
        this.isMentor = true;
        break;
      case "mentor-Algorithms & Data Structures":
        this.title = "Algorithms & Data Structures";
        this.topicId = 3;
        this.isTech = true;
        this.isMentor = true;
        break;
      case "mentor-Data Management":
        this.title = "Data Management";
        this.topicId = 4;
        this.isTech = true;
        this.isMentor = true;
        break;
      case "mentor-Machine Learning":
        this.title = "Machine Learning";
        this.topicId = 5;
        this.isTech = true;
        this.isMentor = true;
        break;
      case "mentor-Human-Computer Interaction":
        this.title = "Human-Computer Interaction";
        this.topicId = 6;
        this.isTech = true;
        this.isMentor = true;
        break;
      case "mentor-Mobile Development":
        this.title = "Mobile Development";
        this.topicId = 7;
        this.isTech = true;
        this.isMentor = true;
        break;
      case "mentor-Web Development":
        this.title = "Web Development";
        this.topicId = 8;
        this.isTech = true;
        this.isMentor = true;
        break;
      case "learn-Computer Architecture":
        this.title = "Computer Architecture";
        this.topicId = 0;
        this.isTech = true;
        break;
      case "learn-Security & Cryptography":
        this.title = "Security & Cryptography";
        this.topicId = 1;
        this.isTech = true;
        break;
      case "learn-Operating Systems":
        this.title = "Operating Systems";
        this.topicId = 2;
        this.isTech = true;
        break;
      case "learn-Algorithms & Data Structures":
        this.title = "Algorithms & Data Structures";
        this.topicId = 3;
        this.isTech = true;
        break;
      case "learn-Data Management":
        this.title = "Data Management";
        this.topicId = 4;
        this.isTech = true;
        break;
      case "learn-Machine Learning":
        this.title = "Machine Learning";
        this.topicId = 5;
        this.isTech = true;
        break;
      case "learn-Human-Computer Interaction":
        this.title = "Human-Computer Interaction";
        this.topicId = 6;
        this.isTech = true;
        break;
      case "learn-Mobile Development":
        this.title = "Mobile Development";
        this.topicId = 7;
        this.isTech = true;
        break;
      case "learn-Web Development":
        this.title = "Web Development";
        this.topicId = 8;
        this.isTech = true;
        break;
      default:
        this.title = "Default Calendar";
    }

    // get requests from firebase
    if (this.isMentor) {
      console.log("Is mentor");
      if (this.isTech) {
        console.log("Is tech");
        this.requests = this.db.getTechnologyQuestions(this.topicId);
      } else {
        this.requests = this.db.getBusinessQuestions(this.topicId);
      }
    } else {
      console.log("Not mentor");
      if (this.isTech) {
        console.log("Is tech");
        this.requests = this.db.getTechnologyEvents(this.topicId);
      } else {
        this.requests = this.db.getBusinessEvents(this.topicId);
      }
    }
  }

  addEvent() {
    this.navCtrl.push(AddeventPage, { filter: this.filter });
  }

  connect() {
    this.userProvider.setArbies(this.userProvider.getArbies() + 3);
    console.log("Arbies: " + this.userProvider.getArbies());
    let toast = this.ToastController.create({
      message: 'You have earned 3 Arbies for creating an event!',
      duration: 1700,
      position: 'middle',
    });
    toast.present();
  }

  register() {
    this.userProvider.setArbies(this.userProvider.getArbies() + 1);
    console.log("Arbies: " + this.userProvider.getArbies());
    let toast = this.ToastController.create({
      message: 'You have earned 1 Arbie for connecting!',
      duration: 1700,
      position: 'middle',
    });
    toast.present();
  }

  dismiss() {
    // Should dismiss this card; doesn't do anything yet
  }

}
