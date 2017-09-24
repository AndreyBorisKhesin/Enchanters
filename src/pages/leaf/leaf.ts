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
    this.navCtrl.push(CalendarPage, { filter: filter });
  }

  ask(topic: string) {
    let filter = topic;
    this.navCtrl.push(AskPage, {filter: filter});
  }

  mentor(topic: string) {
    let filter = "mentor-" + topic;
    this.navCtrl.push(CalendarPage, { filter: filter });
  }

  goToQuestion(filter: any): void {
    this.navCtrl.push(QuestionPage);
  }

  getDescription(): void {
    switch (this.topic) {
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
        this.description = "Sales involves the acquisition and\
         retention of sales, promoting the services and values provided by RBC.\
          Operations oversees our assets and maximizes the value we gain \
          from those assets.";
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
      case "Computer Architecture":
        this.description = "Computer Architecture is the design of a computer\
         system that adequately meets the needs of its users. This means that\
          the hardware components that govern the internal logic of the\
           computer must be efficient, organized, and error-proof.";
        break;
      case "Security & Cryptography":
        this.description = "Security is an essential feature of any application\
         where information must be transmitted between two endpoints. \
         Cryptography is employed to ensure that the receiver can access the\
          sender’s information, but that no malicious party can intercept the\
           transmission.";
        break;
      case "Operating Systems":
        this.description = "Operating systems are the backbone of any computer.\
         They run the internal processes and handle the memory allocation of\
          the computer’s applications. Since various operating systems do this\
           handling differently, it is up to an app’s developers to ensure that\
            it works both on Windows, Mac, and Linux computers.";
        break;
      case "Algorithms & Data Structures":
        this.description = "Algorithms are series of rules that computers\
         can execute to accomplish tasks such as determining whether to buy\
          or sell stock, figuring out which loans are risky, and more. Data\
           structures are ways to store data in a format to that it could be\
            easily modified or retrieved.";
        break;
      case "Data Management":
        this.description = "Data management is a practice that refers to the \
        handling of a company’s data. This includes storing the data in an \
        accessible format, making sure the data is protected, checking for\
         inconsistencies, and making sure that the inferences made from the \
         data are valid.";
        break;
      case "Machine Learning":
        this.description = "Machine learning is a type of artificial \
        intelligence, where computers are programmed to learn to recognize\
         patterns and improve their performance with time. This is in \
         contrast to conventional algorithms where the algorithm has to \
         specify how the computer should execute its task.";
        break;
      case "Human-Computer Interaction":
        this.description = "Human-computer interaction is the process of\
         getting a computer to interpret a user’s instructions. This includes \
         fields such as natural language processing, designing the user\
          interface, and perfecting the user experience.";
        break;
      case "Mobile Development":
        this.description = "Mobile development is the process of developing an\
         application for a mobile phone. This includes cross-platform\
          development such as making sure that the app in question works on\
           iOS, Android, and Windows phones.";
        break;
      case "Web Development":
        this.description = "Web development is the process of developing a\
         website for a company’s business. This includes cross-platform\
          development such as making sure that the website in question works\
           with Chrome, Safari, Firefox, and Internet Explorer browsers.";
        break;
      default:
        this.description = "Default description";
    }
    this.descriptionObtained = true;
  }

}
