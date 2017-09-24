import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { UserProvider } from '../../providers/user/user';
import { FirebaseProvider } from '../../providers/firebase/firebase';

/**
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html'
})
export class SignupPage {
  signupData = {
    name: '',
    email: '',
    password: '',
    passwordRetyped: '',
    preferences: {
    	"b0": 1,
    	"b1": 1,
    	"b2": 1,
    	"b3": 1,
    	"b4": 1,
    	"b5": 1,
    	"b6": 1,
    	"b7": 1,
    	"b8": 1,
    	"t0": 1,
    	"t1": 1,
    	"t2": 1,
    	"t3": 1,
    	"t4": 1,
    	"t5": 1,
    	"t6": 1,
    	"t7": 1,
    	"t8": 1,
	"social": 1
    }
  };

  constructor(
    private navCtrl: NavController,
    private navParams: NavParams,
    private alertCtrl: AlertController,
    private afAuth: AngularFireAuth,
    public userProvider: UserProvider,
    public firebaseProvider: FirebaseProvider) {
    this.signupData.email = this.navParams.get('email');
  }
  
  signup() {
    if(this.signupData.password !== this.signupData.passwordRetyped) {
      let alert = this.alertCtrl.create({
        title: 'Error',
        message: 'Your password and your re-entered password does not match each other.',
        buttons: ['OK']
      });
      alert.present();
      return;
    }

    this.afAuth.auth.createUserWithEmailAndPassword(this.signupData.email, this.signupData.password)
      .then(auth => {
        // Could do something with the Auth-Response
        this.userProvider.setUserName(this.signupData.name);
        this.userProvider.setUserEmail(this.signupData.email);
	this.userProvider.setUserPreferences(this.signupData.preferences);
        this.firebaseProvider.addNewUser(this.signupData);
      })
      .catch(err => {
        // Handle error
        let alert = this.alertCtrl.create({
          title: 'Error',
          message: err.message,
          buttons: ['OK']
        });
        alert.present();
      });
  }
}
