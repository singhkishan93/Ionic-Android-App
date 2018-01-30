import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the BusservicelistPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-busservicelist',
  templateUrl: 'busservicelist.html',
})
export class BusservicelistPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BusservicelistPage');
  }


  data= [{
            imgsrc: 'assets/images/slide.jpg',
            name: 'Satabdi Express',
            price: 'Rs 2000.00',
            dtime:'7:30AM',
            rtime:'8.00hrs'
        }, {
            imgsrc: 'assets/images/slide.jpg',
            name: 'Satabdi Express',
            price: 'Rs 1250.00',
            dtime:'7:30AM',
            rtime:'8.00hrs'
        }, {
            imgsrc: 'assets/images/slide.jpg',
            name: 'Satabdi Express',
            price: 'Rs 900.00',
            dtime:'7:30AM',
            rtime:'8.00hrs'
        }, {
            imgsrc: 'assets/images/slide.jpg',
            name: 'Satabdi Express',
            price: 'Rs 2000.00',
            dtime:'7:30AM',
            rtime:'8.00hrs'
        }, {
            imgsrc: 'assets/images/slide.jpg',
            name: 'Satabdi Express',
            price: 'Rs 1300.00',
            dtime:'7:30AM',
            rtime:'8.00hrs'
        }, {
            imgsrc: 'assets/images/slide.jpg',
            name: 'Satabdi Express',
            price: 'Rs 1300.00',
            dtime:'7:30AM',
            rtime:'8.00hrs'
        },

        {
            imgsrc: 'assets/images/slide.jpg',
            name: 'Satabdi Express',
            price: 'Rs 1120.00',
            dtime:'7:30AM',
            rtime:'8.00hrs'
        }
    ];


    listviewSettings: any = {
        theme: 'ios',
        display:'' ,
        swipe: false,
        sortable: {
            group: false
        },
        enhance: true
    };


}
