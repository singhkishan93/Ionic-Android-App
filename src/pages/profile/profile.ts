import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { LoginPage } from '../login/login';
import { SignupPage } from '../signup/signup';
import { MybookingPage } from '../mybooking/mybooking';
import { MywalletPage } from '../mywallet/mywallet';
import { SettingsPage } from '../settings/settings';
import { AboutusPage } from '../aboutus/aboutus';


/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {

settings: any = {
        theme: 'android'
    }


posts = [];
  imageUrl: string = 'assets/imgs/profile/profile-cover.jpg';

  constructor(public navCtrl: NavController) {
    for (let i = 0; i < 10; i++) {
      this.posts[i] = {
        text: 'Post text ' + i,
        created_at: (i + 1),
      };
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
  }

  mybooking(){

  this.navCtrl.push(MybookingPage);
  }

  logout(){
    //Api Token Logout 
    //const root = this.app.getRootNav();
    //root.popToRoot();
    this.navCtrl.push(HomePage);
  }

  login(){

    //alert("clicked")
   this.navCtrl.push(LoginPage);
  }

  signup(){
   this.navCtrl.push(SignupPage);
  }

  wallet(){
   this.navCtrl.push(MywalletPage);
  }

  about(){
   this.navCtrl.push(AboutusPage);
  }

  settingspage(){
   this.navCtrl.push(SettingsPage);
  }

  items = [
    'Pokémon Yellow',
    'Super Metroid',
    'Mega Man X',
    'The Legend of Zelda',
    'Pac-Man',
    'Super Mario World',
    'Street Fighter II',
    'Half Life',
    'Final Fantasy VII',
    'Star Fox',
    'Tetris',
    'Donkey Kong III',
    'GoldenEye 007',
    'Doom',
    'Fallout',
    'GTA',
    'Halo'
  ];

  itemSelected(item: string) {
    console.log("Selected Item", item);
  }

}
