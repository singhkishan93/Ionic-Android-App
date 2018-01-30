import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MybookingPage } from './mybooking';
import { TravelledPage } from '../travelled/travelled';

@NgModule({
  declarations: [
    TravelledPage,
  ],
  imports: [
    IonicPageModule.forChild(TravelledPage),
  ],
  entryComponents: [
    TravelledPage,
  ]
})
export class MybookingPageModule {}
