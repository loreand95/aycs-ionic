import './shared/rxjs-operators';

import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { IonicStorageModule } from '@ionic/storage';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { httpInterceptorProviders } from '../interceptors';
import { LinguaService } from '../services/lingua.service';
import { PreferitiService } from '../services/preferiti.service';
import { CategoriaService } from '../services/categoria.service';
import { ProdottoService } from '../services/prodotto.service';
import { UtenteService } from '../services/utente.service';
import { MyApp } from './app.component';
import { CallNumber } from '@ionic-native/call-number';


// The translate loader needs to know where to load i18n files
// in Ionic's static asset pipeline.
export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}


@NgModule({
  declarations: [
    MyApp
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      }
    }),
    IonicStorageModule.forRoot({
      name: 'aycs__db',
         driverOrder: ['indexeddb', 'sqlite', 'websql']
    }),
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},    
    UtenteService,
    PreferitiService,
    CategoriaService,
    CallNumber,
    LinguaService,
    ProdottoService,
    httpInterceptorProviders
  ]
})
export class AppModule {}
