import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { HomePage } from '../pages/home/home';
import { WelcomePage } from '../pages/welcome/welcome';
import { SocialPage } from '../pages/social/social';
import { BusinessPage } from '../pages/business/business';
import { TechnologyPage } from '../pages/technology/technology';
import { LeafPage } from '../pages/leaf/leaf';
import { LoginPage } from '../pages/login/login';
import { SignupPage } from '../pages/signup/signup';
import { QuestionPage } from '../pages/question/question';
import { CalendarPage } from '../pages/calendar/calendar';
import { AskPage } from '../pages/ask/ask';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { FirebaseProvider } from '../providers/firebase/firebase';
import { UserProvider } from '../providers/user/user';
import { HttpModule } from '@angular/http';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireAuth } from 'angularfire2/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBngzUa5bdDC3sh9L_x9cD62lSQneCQRKM",
  authDomain: "enchanters-74480.firebaseapp.com",
  databaseURL: "https://enchanters-74480.firebaseio.com",
  projectId: "enchanters-74480",
  storageBucket: "enchanters-74480.appspot.com",
  messagingSenderId: "661519086631"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    WelcomePage,
    SocialPage,
    BusinessPage,
    TechnologyPage,
    LeafPage,
    LoginPage,
    SignupPage,
    QuestionPage,
    CalendarPage,
    AskPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(firebaseConfig),
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    WelcomePage,
    SocialPage,
    BusinessPage,
    TechnologyPage,
    LeafPage,
    LoginPage,
    SignupPage,
    QuestionPage,
    CalendarPage,
    AskPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    FirebaseProvider,
    UserProvider,
    AngularFireAuth
  ]
})
export class AppModule {}
