import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import {HttpProvider} from '../../providers/http';
import { Http } from '@angular/http';
/**
 * Generated class for the TestPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-test',
  templateUrl: 'test.html',
  providers:[HttpProvider]
})
export class TestPage {

newsData: any;
loading: any;

  constructor(public navCtrl: NavController, private httpProvider:HttpProvider, public loadingCtrl:LoadingController) {
  
  this.loading = this.loadingCtrl.create({
  content: `
  <ion-spinner ></ion-spinner>`
});
  this.getdata();
}

getdata(){

  this.loading.present();
  this.httpProvider.getJsonData().subscribe(
    result => {
      this.newsData=result.data.children;
      console.log("Success : "+this.newsData);
      this.hideLoading();
    },
    err =>{
      console.error("Error : "+err);
    } ,
    () => {
      console.log('getData completed');
    }
  );


}

private hideLoading(){
    this.loading.dismiss();
  }

/*let data = {
            'Action': 'Login',
            'UserName': 'bla',
            'Password': 'blabla'
        };
        let headers = {
            'Content-Type': 'application/json'
        };

        this.http.post('http://blabla.com/cloudapi/login', data, headers)
                    .then((data) => {
                        console.log(data);
                    })
                    .catch((error) => {
                        console.log(error);
                    });
                    }*/

  ionViewDidLoad() {
    console.log('ionViewDidLoad TestPage');
  }

}
