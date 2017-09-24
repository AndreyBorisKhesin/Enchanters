import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UserProvider } from '../../providers/user/user';
import { FirebaseProvider } from '../../providers/firebase/firebase';
import { LeafPage } from '../leaf/leaf';

/**
 * Generated class for the AskPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ask',
  templateUrl: 'ask.html',
})
export class AskPage {
  addQuestion = {
    name: '',
    email: '',
    question: '',
    description: ''
  };
  topicId: number;
  filter: string;
  title: string;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public userProvider: UserProvider,
              public firebaseProvider: FirebaseProvider) {
    this.filter = this.navParams.get('filter');
    console.log("In ask, filter = " + this.filter);

    switch (this.filter) {
      case "myQuestions":
        this.title = "My Questions";
        // This is going to be difficult
        break;
      case "Accounting & Actuarial Science":
        this.title = "Accounting & Actuarial Science Questions";
        this.topicId = 0;
        break;
      case "Client Services":
        this.title = "Client Services Questions";
        this.topicId = 1;
        break;
      case "Loan Management & Insurance":
        this.title = "Loan & Insurance Questions";
        this.topicId = 2;
        break;
      case "Marketing":
        this.title = "Marketing Questions";
        this.topicId = 3;
        break;
      case "Public Relations":
        this.title = "Public Relations Questions";
        this.topicId = 4;
        break;
      case "Sales & Operations":
        this.title = "Sales & Operations Questions";
        this.topicId = 5;
        break;
      case "Risk Management":
        this.title = "Risk Management Questions";
        this.topicId = 6;
        break;
      case "Trading & Capital Markets":
        this.title = "Trading & Capital Markets Questions";
        this.topicId = 7;
        break;
      case "Wealth Management":
        this.title = "Wealth Management Questions";
        this.topicId = 8;
        break;
      default:
        this.title = "Default Question";
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AskPage');
  }

  submitQuestion() {
    this.addQuestion.name = this.userProvider.getUserName();
    this.addQuestion.email = this.userProvider.getUserEmail();
    this.firebaseProvider.addNewBusinessQuestion(this.topicId, this.addQuestion);
    this.navCtrl.pop();
  }

}
