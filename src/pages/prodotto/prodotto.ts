import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events } from 'ionic-angular';
import { ProdottoService } from '../../services/prodotto.service';
import { Prodotto } from '../../model/prodotto.model';
import { PreferitiService } from '../../services/preferiti.service';

@IonicPage()
@Component({
  selector: 'page-prodotto',
  templateUrl: 'prodotto.html',
})
export class ProdottoPage {
  prodotto: Prodotto;
  preferito: boolean;

  constructor(public events: Events, public navCtrl: NavController,public preferitiService: PreferitiService, public navParams: NavParams, public prodottoService: ProdottoService,) {

  }

  ionViewWillLeave(){
    this.events.publish('reload');
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad ProdottoPage');
    this.prodottoService.findById(this.navParams.data.prodotto.id).subscribe((data: Prodotto) => {
      this.prodotto = data;
      this.preferito=this.navParams.data.prodotto.preferito;
    });

  }

  addPreferito() {
    this.preferitiService.addPreferito(this.prodotto).subscribe(() => {
      this.preferito=true;
      
    });
  };

  removePreferito() {
    this.preferitiService.deletePreferito(this.prodotto).subscribe(() => {
      this.preferito=false;
      this.events.publish('reloadPreferiti');
    });
  };

}
