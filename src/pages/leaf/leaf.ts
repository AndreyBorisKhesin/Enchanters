import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

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

  }

  ask() {

  }

  mentor() {
    
  }

}
