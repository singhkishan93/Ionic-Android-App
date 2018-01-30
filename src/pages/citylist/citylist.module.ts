import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CitylistPage } from './citylist';

@NgModule({
  declarations: [
    CitylistPage,
  ],
  imports: [
    IonicPageModule.forChild(CitylistPage),
  ],
})
export class CitylistPageModule {}
