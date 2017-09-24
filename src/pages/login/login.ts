import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { SignupPage } from '../signup/signup';
import { FirebaseProvider } from '../../providers/firebase/firebase';
import { UserProvider } from '../../providers/user/user';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  userData: FirebaseListObservable<any[]>;

  loginData = {
    email: '',
    password: ''
  }
  constructor(
    private navCtrl: NavController,
    private afAuth: AngularFireAuth,
    private toastCtrl: ToastController,
    private db: FirebaseProvider,
    private userProvider: UserProvider,
  ) { }
  login() {
    this.afAuth.auth.signInWithEmailAndPassword(this.loginData.email, this.loginData.password)
      .then(auth => {
        // Do custom things with auth
      })
      .catch(err => {
        // Handle error
        let toast = this.toastCtrl.create({
          message: err.message,
          duration: 3000
        });
        toast.present();
      });

    // retrive user data from firebase and populate user provider
    this.userData = this.db.getUserData();
    this.userData.subscribe(users => {
      users.forEach(user => {
        console.log('User:', user.email);
      });
    });

    // kind of a cheat here
    this.userProvider.setUserEmail(this.loginData.email);
  }

  signup() {
    this.navCtrl.push(SignupPage, { email: this.loginData.email });
  }
}
