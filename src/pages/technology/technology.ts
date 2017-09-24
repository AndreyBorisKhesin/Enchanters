import { FirebaseProvider } from './../../providers/firebase/firebase';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { FirebaseListObservable } from 'angularfire2/database';
import { BusinessPage } from '../business/business';
/**
 * Generated class for the TechnologyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
	selector: 'page-technology',
	templateUrl: 'technology.html',
})
export class TechnologyPage {

	skills: FirebaseListObservable<any[]>;

	constructor(
		public navCtrl: NavController,
		public navParams: NavParams,
		public firebaseProvider: FirebaseProvider,
	) {
		this.skills = this.firebaseProvider.getTechSkills();
	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad TechnologyPage');
	}

	goToBusiness() {
		//this.navCtrl.push(BusinessPage);
		this.navCtrl.pop();
	}

}
