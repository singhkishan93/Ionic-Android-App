import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AboutusPage } from './aboutus';
import { AppVersion } from '@ionic-native/app-version';

@NgModule({
  declarations: [
    AboutusPage,
  ],
  imports: [
    IonicPageModule.forChild(AboutusPage),
  ],
})
export class AboutusPageModule {}
