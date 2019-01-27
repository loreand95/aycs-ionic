import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SelezionePage } from './selezione';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    SelezionePage,
  ],
  imports: [
    IonicPageModule.forChild(SelezionePage),
    TranslateModule.forChild()
  ],
})
export class SelezionePageModule {}
