import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { QuestionPage } from '../question/question';
import { CalendarPage } from '../calendar/calendar';

/**
 * Generated class for the LeafPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-leaf',
  templateUrl: 'leaf.html',
})
export class LeafPage {

  topic: string;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams
  ) {
    this.topic = this.navParams.get('topic');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LeafPage');
  }

  learn() {
    this.goToCalendar(5);
  }

  ask() {

  }

  mentor() {
    this.goToCalendar(5);
  }

  goToQuestion(filter: any): void {
    this.navCtrl.push(QuestionPage);
  }

  goToCalendar(filter: any): void {
    this.navCtrl.push(CalendarPage);
  }

}
