import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.filter = this.navParams.get('filter');

    switch(this.filter) {
      case "myQuestions":
        this.title = "My Questions";
        break;
      default:
        this.title = "Questions";
    }

    console.log(this.title);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CalendarPage');
  }

}
