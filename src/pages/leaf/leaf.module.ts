import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LeafPage } from './leaf';

@NgModule({
  declarations: [
    LeafPage,
  ],
  imports: [
    IonicPageModule.forChild(LeafPage),
  ],
})
export class LeafPageModule {}
