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
    arbies: 0,
    preferences: {
    	"b0": 1 + 20 * Math.floor(Math.random() + 0.2) + 0.05 * Math.random(),
    	"b1": 1 + 20 * Math.floor(Math.random() + 0.2) + 0.05 * Math.random(),
    	"b2": 1 + 20 * Math.floor(Math.random() + 0.2) + 0.05 * Math.random(),
    	"b3": 1 + 20 * Math.floor(Math.random() + 0.2) + 0.05 * Math.random(),
    	"b4": 1 + 20 * Math.floor(Math.random() + 0.2) + 0.05 * Math.random(),
    	"b5": 1 + 20 * Math.floor(Math.random() + 0.2) + 0.05 * Math.random(),
    	"b6": 1 + 20 * Math.floor(Math.random() + 0.2) + 0.05 * Math.random(),
    	"b7": 1 + 20 * Math.floor(Math.random() + 0.2) + 0.05 * Math.random(),
    	"b8": 1 + 20 * Math.floor(Math.random() + 0.2) + 0.05 * Math.random(),
    	"t0": 1 + 20 * Math.floor(Math.random() + 0.2) + 0.05 * Math.random(),
    	"t1": 1 + 20 * Math.floor(Math.random() + 0.2) + 0.05 * Math.random(),
    	"t2": 1 + 20 * Math.floor(Math.random() + 0.2) + 0.05 * Math.random(),
    	"t3": 1 + 20 * Math.floor(Math.random() + 0.2) + 0.05 * Math.random(),
    	"t4": 1 + 20 * Math.floor(Math.random() + 0.2) + 0.05 * Math.random(),
    	"t5": 1 + 20 * Math.floor(Math.random() + 0.2) + 0.05 * Math.random(),
    	"t6": 1 + 20 * Math.floor(Math.random() + 0.2) + 0.05 * Math.random(),
    	"t7": 1 + 20 * Math.floor(Math.random() + 0.2) + 0.05 * Math.random(),
    	"t8": 1 + 20 * Math.floor(Math.random() + 0.2) + 0.05 * Math.random(),
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
    if (this.signupData.password !== this.signupData.passwordRetyped) {
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
        this.userProvider.setUserName(this.signupData.name);
        this.userProvider.setUserEmail(this.signupData.email);
<<<<<<< HEAD
	this.userProvider.setUserPreferences(this.signupData.preferences);
	this.userProvider.setUserArbies(this.signupData.arbies);
=======
        this.userProvider.setUserPreferences(this.signupData.preferences);
        this.userProvider.setArbies(0);
        this.userProvider.setNumQuestions(0);
>>>>>>> 1b619626603abd5fc05f929bfbba57ea9cff5e94
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
