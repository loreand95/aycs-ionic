import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { HttpErrorResponse } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { AlertController, Events } from 'ionic-angular';
import { Utente } from '../../model/utente.model';
import { NewAccount, UtenteService } from '../../services/utente.service';
import { ToastController } from 'ionic-angular';
@IonicPage()
@Component({
  selector: 'page-registrazione',
  templateUrl: 'registrazione.html',
})
export class RegistrazionePage {

  account: NewAccount = { nome:"", cognome: "",username:"", password:"", email:""}
  
  loginTitle: string;
  loginSubTitle: string;

  constructor(private toastCtrl: ToastController,public navCtrl: NavController, public events: Events, public alertCtrl: AlertController, public utenteService: UtenteService, public translateService: TranslateService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegistrazionePage');
    
    this.translateService.get('SIGN_ERROR_SUB_TITLE').subscribe((data) => {
      this.loginSubTitle = data;
    });
    this.translateService.get('SIGN_ERROR_TITLE').subscribe((data) => {
      this.loginTitle = data;
    });
  }

  presentToast() {
    let banner:string;
    this.translateService.get('MESSAGE_USER_CREATE').subscribe(res => {
      banner = res;
    });

    let toast = this.toastCtrl.create({
      message: banner,
      duration: 3000,
      position: 'bottom',
      showCloseButton: true,
      closeButtonText:'OK',
      cssClass: "success"
    });

    toast.present();
  }

  onSign(form: NgForm) {    
    if (form.valid) {
      this.utenteService.signIn(this.account).subscribe((utente: Utente) => {
          this.navCtrl.pop();
          this.presentToast();
        },
          (err: HttpErrorResponse) => {
            if (err.status == 500) {
              if(err.error.message=='email exist'){
                this.translateService.get('SIGN_ERROR_EMAIL_SUB_TITLE').subscribe((data) => {
                  this.loginSubTitle = data;
                });
              }
              if(err.error.message=='user exist'){
                this.translateService.get('SIGN_ERROR_USERNAME_SUB_TITLE').subscribe((data) => {
                  this.loginSubTitle = data;
                });
              }
              console.error('Sign error: ' + err.status);
              this.showLoginError();
            }
          })
    }
  }

  showSuccess() {
    let alert = this.alertCtrl.create({
      title: 'Registrazione',
      subTitle: 'Registrazione completata',
      buttons: ['OK']
    });
    alert.present();
  }

  showLoginError() {
    let alert = this.alertCtrl.create({
      title: this.loginTitle,
      subTitle: this.loginSubTitle,
      buttons: ['OK']
    });
    alert.present();
  }

  

}
