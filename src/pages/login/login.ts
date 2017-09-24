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

  userData: Map<any, any>;

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
    // let allUsers = this.db.getUserData() as Array<Array<any>>;
    // console.log(allUsers);
    // console.log(allUsers[0]);
    // console.log("len of allUsers[0]: " + allUsers[0].length);
    // console.log("typs of allUsers[0] " + typeof(allUsers[0]));
    // console.log(allUsers[0]);
    // for (let i = 0; i < allUsers.length; i++) {
    //   if (this.loginData.email == allUsers[1][i]) {
    //     console.log("Found user");
    //     this.userProvider.setUserName(allUsers[0][i]);
    //     // this.userProvider.setUserEmail(this.userData.get('email'));
    //     // this.userProvider.setUserPreferences(this.userData.get('preferences'));
    //   }
    // }

  }

  signup() {
    this.navCtrl.push(SignupPage, { email: this.loginData.email });
  }
}
