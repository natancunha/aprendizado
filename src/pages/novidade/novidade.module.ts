import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NovidadePage } from './novidade';

@NgModule({
  declarations: [
    NovidadePage,
  ],
  imports: [
    IonicPageModule.forChild(NovidadePage),
  ],
})
export class NovidadePageModule {}
