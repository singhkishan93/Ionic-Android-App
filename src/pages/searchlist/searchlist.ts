import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { mobiscroll } from '@mobiscroll/angular-trial';
import { BusdetailsPage } from '../busdetails/busdetails';
/**
 * Generated class for the SearchlistPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

 mobiscroll.settings = {
    theme: 'android'
};


@IonicPage()
@Component({
  selector: 'page-searchlist',
  templateUrl: 'searchlist.html',
})
export class SearchlistPage implements OnInit {

origin:string;

  formSettings = {
        theme: 'android'
    };

  constructor(public navCtrl: NavController, private navParams: NavParams) {
  }


  ngOnInit(){

  this.origin = this.navParams.get('originDate');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SearchlistPage');
  }

  data = [{
        title: 'Safar Express',
        desc: 'A/C SLEEPER (2+1)',
        dtime: '7:30AM',
        aseats: '10',
        rtime:'8:00hrs',
        like: false,
        //cssClass: 'md-card-bg-II'
    }, {
        title: 'Safar Express',
        desc: 'A/C SLEEPER (2+1)',
        dtime: '7:30AM',
        aseats: '10',
        rtime:'8:00hrs',
        like: false,
        //cssClass: 'md-card-bg-II'
    }, {
        title: 'Safar Express',
        desc: 'A/C SLEEPER (2+1)',
        dtime: '7:30AM',
        aseats: '10',
        rtime:'8:00hrs',
        like: false,
        //cssClass: 'md-card-bg-II'
    }, {
        title: 'Safar Express',
        desc: 'A/C SLEEPER (2+1)',
        dtime: '7:30AM',
        aseats: '10',
        rtime:'8:00hrs',
        like: false,
        //cssClass: 'md-card-bg-II'
    }, {
        title: 'Safar Express',
        desc: 'A/C SLEEPER (2+1)',
        dtime: '7:30AM',
        aseats: '10',
        rtime:'8:00hrs',
        like: false,
        //cssClass: 'md-card-bg-II'
    }, {
        title: 'Safar Express',
        desc: 'A/C SLEEPER (2+1)',
        dtime: '7:30AM',
        aseats: '10',
        rtime:'8:00hrs',
        like: false,
        //cssClass: 'md-card-bg-II'
    }];

    likeHandler(index) {
        this.data[index].like = !this.data[index].like;
        if (this.data[index].like) {
            mobiscroll.toast({
                message: 'Added to favorites'
            });
        }
    }

    buslist(){
    //Api connections
    this.navCtrl.push(BusdetailsPage);
    }

}
