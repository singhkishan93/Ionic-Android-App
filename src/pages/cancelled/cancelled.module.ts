import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CancelledPage } from './cancelled';

@NgModule({
  declarations: [
    CancelledPage,
  ],
  imports: [
    IonicPageModule.forChild(CancelledPage),
  ],
})
export class CancelledPageModule {}
