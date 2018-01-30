import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { SettingsPage } from '../pages/settings/settings';
import { ProfilePage } from '../pages/profile/profile';
import { HelpPage } from '../pages/help/help';
import { AboutusPage } from '../pages/aboutus/aboutus';
import { MybookingPage } from '../pages/mybooking/mybooking';
import { BusdetailsPage } from '../pages/busdetails/busdetails';
import { SlidesPage } from '../pages/slides/slides';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;
  //rootPage:any = TabsPage;

  pages: Array<{title: string, component: any,icon:string}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage, icon:'home' },
      { title: 'My Account', component: ProfilePage, icon:'person' },
      { title: 'My Bookings', component: MybookingPage, icon:'bus' },
       { title: 'Settings', component: SettingsPage, icon:'settings' },
       { title: 'Help', component: HelpPage, icon:'help' },
       //{ title: 'Logout', component: HomePage }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
