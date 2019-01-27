import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProdottoPage } from './prodotto';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    ProdottoPage,
  ],
  imports: [
    IonicPageModule.forChild(ProdottoPage),
    TranslateModule.forChild()
  ],
})
export class ProdottoPageModule {}
