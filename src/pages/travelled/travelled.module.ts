import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TravelledPage } from './travelled';

@NgModule({
  declarations: [
    TravelledPage,
  ],
  imports: [
    IonicPageModule.forChild(TravelledPage),
  ],
})
export class TravelledPageModule {}
