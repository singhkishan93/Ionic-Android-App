import { Component, OnInit } from '@angular/core';
import { NavController, NavParams, AlertController, LoadingController} from 'ionic-angular';
import { LoginPage } from '../login/login';
import { SignupPage } from '../signup/signup';
import { BusservicelistPage } from '../busservicelist/busservicelist';
import { SearchlistPage } from '../searchlist/searchlist';
import { TestPage } from '../test/test';
import {HttpProvider} from '../../providers/http';
import { Http } from '@angular/http';
import "rxjs/add/operator/map";

let now = new Date(),
    oneWay = false,
    departureDate,
    returnDate;

    /*let now1 = new Date(),
    oneWay1 = false,
    returnDate;*/

departureDate = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 0);
returnDate = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 2);

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers:[HttpProvider]
})
export class HomePage implements OnInit {

newsData: any;
loading: any;
email:string;

  slideData = [{ image: "assets/images/slide-1.jpg" },{ image: "assets/images/slide-2.jpg" },{ image: "assets/images/slide.jpg" }]
  slideLength: boolean = false;

    objectKeys = Object.keys;
    value = { option1: 'foo', option2: 'bar' };  


  constructor(public navCtrl: NavController, private navParams: NavParams,private alertCtrl: AlertController,private httpProvider:HttpProvider, public loadingCtrl:LoadingController) {

    if(this.slideData.length>0) {
      this.slideLength = true;
    }
  }

  ngOnInit(){

  this.email = this.navParams.get('userEmail');
  }

  login(){
   this.navCtrl.push(LoginPage);
  }

  signup(){
   this.navCtrl.push(SignupPage);
  }

  test(){

  this.navCtrl.push(TestPage);
  }

  buslist(jDate: string){
    //Api connections

    let alert = this.alertCtrl.create({
            title: 'IndusBus' + departureDate + '!',
            buttons: ['OK']
        });
        alert.present();
        this.navCtrl.push(SearchlistPage,{originDate:departureDate});
    }

    busServiceList(){
    this.navCtrl.push(BusservicelistPage);
    }

    citylist(){

    //this.navCtrl.push(CitylistPage);
    }

   getdata(){

    this.loading.present();

    this.httpProvider.getCityData().subscribe(
    result => {

         //console.log(result);
        this.newsData=result.data;

        this.newsData=result.placeCode;

        console.log(this.newsData);

         /*let cluster = [];
        let i = 0;
        result.forEach( r => {
            i++;
            let j = 0;
            r.placeID.forEach( id => {
                j++;
                if(!cluster[id])
                    cluster[id] = [];
                cluster[id].push(r);
            });
            if(i == result.length && j == r.placeID.length) this.finalresult=cluster;
        });
        console.log(cluster);*/
      this.hideLoading();
    },
    err =>{
      console.log("Error : "+err);
    } ,
    () => {
      console.log('getData completed');
    }
  );


}

private hideLoading(){
    this.loading.dismiss();
  }

    formSettings = {
        theme: 'ios'
    };
    origin = 'LTN';
    segmented = 'round';
    segmented2 = 'economy';
    
    selectSettings: any = {
        multiline: 2,
        height: 50,
        /*data: {
           //url: 'https://trial.mobiscroll.com/airports/',
           
            processResponse: function (data) {
                var i,
                    item,
                    ret = [];

                if (data) {
                    for (i = 0; i < data.length; i++) {
                        item = data[i];
                        ret.push({
                            value: item.placeCode,
                            text: item.placeName,
                            html: '<div style="font-size:16px;line-height:18px;">' + item.placeName + '</div><div style="font-size:10px;line-height:12px;">' + item.placeCode + '</div>'
                           // html: '<div style="font-size:16px;line-height:18px;">' + item.placeName + '</div><div style="font-size:10px;line-height:12px;">' + item.location + ', ' + item.placeCode + '</div>'
                        });
                    }
                }

                return ret;
            }
        },*/
        filter: true,
        placeholder: 'Select City'
    };
    
    range = [departureDate, returnDate];
    
    rangeSettings: any = {
        display: 'bottom',
        startInput: '.md-leaving-date',
        endInput: '.md-return-date',
        min: now,
        showSelector: false,
        onSetDate: function (event, inst) {
            if (oneWay && event.control == 'calendar' && event.active == 'start') {
                inst._isVisible = false;
                inst.setActiveDate('start');
                inst._isVisible = true;
            }
            if (inst._markup) {
                inst._isValid = true;
                inst._markup.find('.mbsc-fr-btn-s .mbsc-fr-btn').removeClass('mbsc-fr-btn-d');
            }
        },
        onBeforeClose: function () {
            if (oneWay) {
                return true;
            }
        },
        onSet: function (event, inst) {
            var values = inst.getVal();
            departureDate = values[0];
            if (!oneWay) {
                returnDate = values[1];
            }
        }
    }

    public finalresult= [];



    ionViewDidLoad(){

         this.httpProvider.getCityData().subscribe(
    result => {

       this.finalresult = result;
    }
  );
    }

}
