import { FirebaseProvider } from '../../providers/firebase/firebase';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { WelcomePage } from '../welcome/welcome';
import { FirebaseListObservable } from 'angularfire2/database';
import { UserProvider } from '../../providers/user/user';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
  user: any;

  names: FirebaseListObservable<any[]>;
  newName = '';

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public firebaseProvider: FirebaseProvider,
    public userProvider: UserProvider,
  ) {
    this.names = this.firebaseProvider.getNames();
  }

  ionViewDidLoad() {
    console.log(this.user);
  }

  addItem() {
    this.firebaseProvider.addItem(this.newName);
    this.userProvider.setUser(this.newName);
  }

  removeItem(id) {
    this.firebaseProvider.removeItem(id);
  }

  goToWelcomePage() {
    this.navCtrl.push(WelcomePage);
  }

}
