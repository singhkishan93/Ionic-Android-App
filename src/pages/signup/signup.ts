import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController,Events  } from 'ionic-angular';
import { NgForm } from '@angular/forms';

/**
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',

})
export class SignupPage {

signup1: {username?: string, password?: string} = {};
  submitted = false;
  message: any;

   formSettings = {
         theme: 'android',
     };

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController,public events: Events) {
       this.message = '';
    this.events.subscribe('user:signup1_signup.ts', (data: any) => {
      this.message = data;
    });

  }

  ionViewDidLoad() {

  console.log('ionViewDidLoad Signup');
    }

  signup(){
    //this.navCtrl.push(ListPage);
      //this.userData.signup(this.signup1.username, this.signup1.password);
      alert("All fields are required!");
    

    
  }

}
