import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { QuestionPage } from '../question/question';
import { CalendarPage } from '../calendar/calendar';
import { AskPage } from '../ask/ask';

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
  description: string;
  descriptionObtained: boolean;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams
  ) {
    this.descriptionObtained = false;
    this.topic = this.navParams.get('topic');
    this.getDescription();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LeafPage');
  }

  learn(topic: string) {
    let filter = "learn-" + topic;
    this.navCtrl.push(CalendarPage, {filter: filter});
  }

  ask(topic: string) {
    this.navCtrl.push(AskPage, {topic: topic});
  }

  mentor(topic: string) {
    let filter = "mentor-" + topic;
    this.navCtrl.push(CalendarPage, {filter: filter});
  }

  goToQuestion(filter: any): void {
    this.navCtrl.push(QuestionPage);
  }

  getDescription(): void {
    switch(this.topic) {
      case "Accounting & Actuarial Science":
        this.description = "Accounting involves accruing and  \
        reporting the financial and economic information of an organization. \
        Actuarial science is the application of mathematics and statistics to\
         analyze financial situations.";
        break;
      case "Client Services":
        this.description = "Client services involve working closely with RBC \
        clients, both individuals and businesses, to satisfy their banking \
        needs. This focuses on maintaining relationships with pre existing \
        clients and forming new client relationships.";
        break;
      case "Loan Management & Insurance":
        this.description = "Loan management involves the lending of money to \
        businesses and individuals. This involves evaluating the client’s \
        financial situation and the risk of the loan. Insurance protects clients\
         from financial loss due to unpredictable circumstances.";
        break;
      case "Marketing":
        this.description = "Marketing produces promotional materials to\
         publicize the financial skills and services provided by RBC. \
          Marketing is crucial for showing businesses and individuals how RBC\
           aligns with their financial goals.";
        break;
      case "Public Relations":
        this.description = "Public relations involves overseeing media coverage\
         and event coordination, with a strong focus on maintaining the \
         company’s public image. This would also include maintaining written\
          materials for reports, presentations, and websites.";
        break;
      case "Sales & Operations":
        this.description = "You try to sell people things and make money.";
        break;
      case "Risk Management":
        this.description = "Risk Management provides financial advice for \
        transactions on the capital market using a thorough analysis of risk \
        and return. This is crucial for making sure that the investments made\
         by the company have a good return on investment.";
        break;
      case "Trading & Capital Markets":
        this.description = "Trading involves buying and selling securities such\
         as stocks, bonds, derivatives, and mutual funds on the market.  \
         Capital Markets is similar, but has a focus on trading long-term\
          securities.";
        break;
      case "Wealth Management":
        this.description = "Wealth management maintains and advises on \
        financial planning and portfolios for individuals with a high net\
         worth, businesses, and families. Wealth managers provide insight \
         into investments, estate planning, retirement saving, and more.";
        break;
      default:
        this.description = "Default description";
    }
    this.descriptionObtained = true;
  }

}
