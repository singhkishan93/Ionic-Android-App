import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BusservicelistPage } from './busservicelist';

@NgModule({
  declarations: [
    BusservicelistPage,
  ],
  imports: [
    IonicPageModule.forChild(BusservicelistPage),
  ],
})
export class BusservicelistPageModule {}
