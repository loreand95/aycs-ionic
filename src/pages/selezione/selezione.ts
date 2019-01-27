import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Prodotto } from '../../model/prodotto.model';
import { ProdottoService } from '../../services/prodotto.service';

@IonicPage()
@Component({
  selector: 'page-selezione',
  templateUrl: 'selezione.html',
})
export class SelezionePage {

  menu: Array<Prodotto>;

  constructor(public navCtrl: NavController, public navParams: NavParams,public prodottoService: ProdottoService) {
  }

  ionViewWillEnter() {
    console.log('ionViewDidLoad SelezionePage');
    this.prodottoService.listSelezione().subscribe((data: Array<Prodotto>) => {
      this.menu=data;   
    });
    
  }

}
