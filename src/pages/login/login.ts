import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, LoadingController, Loading } from 'ionic-angular';
import { AuthService } from '../../providers/auth-service';
import { SignupPage } from '../signup/signup';
import { HomePage } from '../home/home';
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

 

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  loading: Loading;
  registerCredentials = { email: '', password: '' };

  email: string;

formSettings = {
        theme: 'android'
    };

    isLogin: boolean = false;

    singUp(ev) {}

    logIn(ev) {}
 

  constructor(public navCtrl: NavController, public navParams: NavParams,private auth: AuthService, private alertCtrl: AlertController, private loadingCtrl: LoadingController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  public createAccount() {
    this.navCtrl.push(SignupPage);
  }

  public login(email: string) {

  let alert = this.alertCtrl.create({
            title: 'Hello ' + this.email + '!',
            buttons: ['OK']
        });
        alert.present();

        this.navCtrl.push(HomePage,{userEmail:email});
      
    //this.showLoading()
    //this.auth.login(this.registerCredentials).subscribe(allowed => {
      //if (allowed) {        
        //this.navCtrl.setRoot('HomePage');
      //} else {
        //this.showError("Access Denied");
      //}
   // },
     // error => {
       // this.showError(error);
      //});
  }
 
  showLoading() {
    this.loading = this.loadingCtrl.create({
      content: 'Please wait...',
      dismissOnPageChange: true
    });
    this.loading.present();
  }
 
  showError(text) {
    this.loading.dismiss();
 
    let alert = this.alertCtrl.create({
      title: 'Fail',
      subTitle: text,
      buttons: ['OK']
    });
    alert.present(prompt);
  }
 

}
