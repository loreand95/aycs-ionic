import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { App } from 'ionic-angular';
import { TranslateService } from '@ngx-translate/core';
import { AlertController, Events, IonicPage, NavController } from 'ionic-angular';

import { Utente } from '../../model/utente.model';
import { Account, UtenteService } from '../../services/utente.service';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  account: Account = { username: "", password: "" };
  loginTitle: string;
  loginSubTitle: string;
  requiredUsername = false;
  requiredPassword = false;

  constructor(public navCtrl: NavController,public events: Events, public alertCtrl: AlertController, public appCtrl:App,public utenteService: UtenteService, public translateService: TranslateService) {

  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');

    this.translateService.get('LOGIN_ERROR_SUB_TITLE').subscribe((data) => {
      this.loginSubTitle = data;
    });
    this.translateService.get('LOGIN_ERROR_TITLE').subscribe((data) => {
      this.loginTitle = data;
    });
  }
  
  signIn(){
      this.navCtrl.push('RegistrazionePage');
  }

  onLogin(form: NgForm) {
    if (form.valid) {
      this.utenteService.login(this.account).subscribe((utente: Utente) => {
          this.events.publish('login', utente);
        },
          (err: HttpErrorResponse) => {
            if (err.status == 401) {
            this.showLoginError();
            }
          });
    }
  }
  

  loadRequiredUsername(){
    this.requiredUsername=true;
  }

  loadRequiredPassword(){
    this.requiredPassword=true;
  }

  showLoginError() {
    let alert = this.alertCtrl.create({
      title: this.loginTitle,
      subTitle: this.loginSubTitle,
      buttons: ["OK"]
    });
    alert.present();
  }

}
