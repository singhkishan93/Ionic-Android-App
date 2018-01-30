import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the BusdetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-busdetails',
  templateUrl: 'busdetails.html',
})
export class BusdetailsPage {

appType = 'Busdetails';

 slideData = [{ image: "assets/images/slide-1.jpg" },{ image: "assets/images/slide-2.jpg" },{ image: "assets/images/slide.jpg" }]
  slideLength: boolean = false;

  constructor(public navCtrl: NavController, public navParams: NavParams) {

  if(this.slideData.length>0) {
      this.slideLength = true;
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BusdetailsPage');
  }

  

  public buttonClicked1: boolean = true;

    public onButtonClick1() {

        this.buttonClicked1 = !this.buttonClicked1;
    }

  public buttonClicked: boolean = false; //Whatever you want to initialise it as

    public onButtonClick() {

        this.buttonClicked = !this.buttonClicked;
        this.onButtonClick1();
    }

    apps: any = {
    'Amenities': [
      {
        name: 'Charging Point',
        
      },
      {
        name: 'Watter Bottle',
        
      },
      {
        name: 'Toilet',
        
      }
    ],
    'Reviews': [
      {
        name: 'Satabdi Travells',
        price: '4.14'
      },
      {
        name: 'Himanshu',
        price: '4.5'
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


 

}
