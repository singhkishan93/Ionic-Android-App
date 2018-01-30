import { FormsModule } from '@angular/forms';
import { MbscModule, mobiscroll } from '@mobiscroll/angular-trial';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { AuthService } from './../providers/auth-service';
import { MyApp } from './app.component';
import { SlidesPage } from '../pages/slides/slides';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { LoginPage } from '../pages/login/login';
import { SignupPage } from '../pages/signup/signup';
import { TestPage } from '../pages/test/test';
import { ProfilePage } from '../pages/profile/profile';
import { MybookingPage } from '../pages/mybooking/mybooking';
import { BusservicelistPage } from '../pages/busservicelist/busservicelist';
import { HelpPage } from '../pages/help/help';
import { SettingsPage } from '../pages/settings/settings';
import { AboutusPage } from '../pages/aboutus/aboutus';
import { SearchlistPage } from '../pages/searchlist/searchlist'
import { TravelledPage } from '../pages/travelled/travelled'
import { CitylistPage } from '../pages/citylist/citylist'
import { MywalletPage } from '../pages/mywallet/mywallet'
import { BusdetailsPage } from '../pages/busdetails/busdetails'
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HttpProvider } from '../providers/http/http';
import { HttpModule } from '@angular/http';

mobiscroll.apiKey = '89381c64';

@NgModule({
  declarations: [
    MyApp,
    SlidesPage,
    HomePage,
    ListPage,
    LoginPage,
    SignupPage,
    ProfilePage,
    MybookingPage,
    HelpPage,
    SettingsPage,
    AboutusPage,
    SearchlistPage,
    TravelledPage,
    CitylistPage,
    BusdetailsPage,
    MywalletPage,
    BusservicelistPage,
    TestPage
    
  ],
  imports: [ 
    FormsModule, 
    MbscModule,
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule
   
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    SlidesPage,
    HomePage,
    ListPage,
    LoginPage,
    SignupPage,
    ProfilePage,
    MybookingPage,
    HelpPage,
    SettingsPage,
    AboutusPage,
    SearchlistPage,
    TravelledPage,
    CitylistPage,
    BusdetailsPage,
    MywalletPage,
    BusservicelistPage,
    TestPage
     
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    HttpProvider,
    AuthService
  ]
})
export class AppModule {}
