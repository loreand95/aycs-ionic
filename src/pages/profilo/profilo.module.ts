import { HttpClient } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';

import { createTranslateLoader } from '../../app/app.module';
import { ProfiloPage } from './profilo';

// The translate loader needs to know where to load i18n files
// in Ionic's static asset pipeline.
@NgModule({
  declarations: [
    ProfiloPage,
  ],
  imports: [
    IonicPageModule.forChild(ProfiloPage),
    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      }
    })    
  ]
})
export class ProfiloPageModule {}
