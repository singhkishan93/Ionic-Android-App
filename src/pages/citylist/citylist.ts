import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the CitylistPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-citylist',
  templateUrl: 'citylist.html',
})
export class CitylistPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CitylistPage');
  }

  data = [
  {
        color: '4c66a4',
        mono: 'D',
        name: 'Delhi',
        
    }, {
        color: '287BBC',
        mono: 'M',
        name: 'Mumbai',
      
    }, {
        color: '5185a8',
        mono: 'P',
        name: 'Pune',
        
    }, {
        color: '1a3665',
        mono: 'P',
        name: 'Patna',
        
    }, {
        color: 'dd4b39',
        mono: 'G',
        name: 'Goa',
      
    }, {
        color: '5185a8',
        mono: 'B',
        name: 'Banglore',
       
    }

    ];

    listviewSettings: any = {
        theme: 'android',
        display: '',
        stages: [{
            percent: -30,
            action: (event, inst) => {
                //this.remove(event.index);
                return true;
            },
            undo: true
        }, {
            percent: 30,
            action: (event, inst) => {
                //this.remove(event.index);
                return false;
            },
            undo: true
        }]
    };


    remove(index) {
        //this.data.splice(index, 1);
    }
}


