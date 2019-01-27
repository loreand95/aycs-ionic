import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Utente } from '../../model/utente.model';
import { Lingua, LinguaService } from '../../services/lingua.service';
import { UtenteService } from '../../services/utente.service';

@IonicPage()
@Component({
  selector: 'page-profilo',
  templateUrl: 'profilo.html',
})

export class ProfiloPage {
  utente: Utente;
  linguaPreferita: string;
  lingue: Array<Lingua>;


  constructor(public navCtrl: NavController, public navParams: NavParams, public utenteService: UtenteService,
    public linguaService: LinguaService, public translateService: TranslateService) {
    console.log("constructor ProfiloPage");
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad ProfiloPage");
    this.lingue = this.linguaService.getLingue();
    this.linguaService.getLinguaAttuale().subscribe((lingua: string) => {
      this.linguaPreferita = lingua;
    });
    this.utenteService.getUtente().subscribe((utente: Utente) => {
      this.utente = utente;
    });
  }

  onSubmit(form: NgForm) {
    if (form.valid) {
      this.translateService.use(this.linguaPreferita);
      this.linguaService.updateLingua(this.linguaPreferita);
      this.utenteService.updateProfilo(this.utente).subscribe((nuovoUtente: Utente) => {
        this.utente = nuovoUtente;
        this.navCtrl.pop();
      });

    }
  }

  logout() {
    console.log("logout");
    this.utenteService.logout();
    this.navCtrl.setRoot('LoginPage');
  }

}
