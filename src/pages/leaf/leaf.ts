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

  learn(topic: string) {
    this.goToLearnCalendar(topic);
  }

  ask() {

  }

  mentor(topic: string) {
    this.goToMentorCalendar(topic);
  }

  goToQuestion(filter: any): void {
    this.navCtrl.push(QuestionPage);
  }

  goToLearnCalendar(filter: any): void {
    this.navCtrl.push(CalendarPage, {filter: filter});
  }

  goToMentorCalendar(filter: any): void {

  }



}
