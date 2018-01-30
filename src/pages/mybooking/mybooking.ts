import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TravelledPage } from '../travelled/travelled';
/**
 * Generated class for the MybookingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-mybooking',
  templateUrl: 'mybooking.html',
})
export class MybookingPage {

  appType = 'MyBooking';
  safari = 'Shared Links';
  weather = 'sunny';

apps: any = {
    'Travelled': [
      {
        name: 'Safar Express',
        price: '12/01/2018'
      },
      {
        name: 'Satabdi Travells',
        price: '18/01/2018'
      }
    ],
    'Cancelled': [
      {
        name: 'Satabdi Travells',
        price: '19/01/2018'
      },
      {
        name: 'Safar Express',
        price: '20/01/2018'
      }
    ],
    'Top': [
      {
        name: 'Spotify',
        price: 'OPEN'
      },
      {
        name: 'Pandora',
        price: 'GET'
      }
    ]
  };

  items: any = {
    'Bookmarks': [
      {
        name: 'Favorites',
        icon: 'ios-star-outline'
      },
      {
        name: 'History',
        icon: 'ios-clock-outline'
      }
    ],
    'Reading List': [
      {
        name: 'Terms of Service',
        icon: 'create'
      },
      {
        name: 'User Guide',
        icon: 'book'
      }
    ],
    'Shared Links': [
      {
        name: 'Ionic Framework',
        icon: 'ionic'
      },
      {
        name: 'Learn Angular',
        icon: 'logo-angular'
      }
    ]
  };

  getItems(type: any) {
    return this.apps[type];
  }

  getSafariItems(type: any) {
    return this.items[type];
  }

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MybookingPage');
  }

  travelled(){

  this.navCtrl.push(TravelledPage);
  }

}
