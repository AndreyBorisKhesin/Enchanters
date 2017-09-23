import { FirebaseProvider } from './../../providers/firebase/firebase';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { WelcomePage } from '../welcome/welcome';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  names: FirebaseListObservable<any[]>;
  newName = '';

  constructor(public navCtrl: NavController, public firebaseProvider: FirebaseProvider) {
    this.names = this.firebaseProvider.getNames();
  }

  addItem() {
    this.firebaseProvider.addItem(this.newName);
  }

  removeItem(id) {
    this.firebaseProvider.removeItem(id);
  }

  goToWelcomePage() {
    this.navCtrl.push(WelcomePage);
  }

}
