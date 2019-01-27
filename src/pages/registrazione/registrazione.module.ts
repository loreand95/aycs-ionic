import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RegistrazionePage } from './registrazione';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    RegistrazionePage,
  ],
  imports: [
    IonicPageModule.forChild(RegistrazionePage),
    TranslateModule.forChild()
  ],
})
export class RegistrazionePageModule {}
