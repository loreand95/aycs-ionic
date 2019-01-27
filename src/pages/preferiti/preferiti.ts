import { Component,ViewChild } from '@angular/core';
import { IonicPage, App, NavController, NavParams, Refresher,Events } from 'ionic-angular';
import { PreferitiService } from '../../services/preferiti.service';
import { Prodotto } from '../../model/prodotto.model';

@IonicPage()
@Component({
  selector: 'page-preferiti',
  templateUrl: 'preferiti.html',
})



export class PreferitiPage {
  emptyList: boolean;
  prodotti: Array<Prodotto>;
  
  @ViewChild(Refresher) refresher: Refresher;

  constructor(public events: Events,public appCtrl: App, public navCtrl: NavController, public navParams: NavParams, public preferitiService: PreferitiService) {
    console.log('constructor PreferitiPage');
  }

  ionViewWillLeave(){
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PreferitiPage');
    //refresh after page prodotto 
    this.events.subscribe('reloadPreferiti', () => {
      console.log("reload");
      this.refresher._top = '50px';
      this.refresher.state = 'refreshing';
      this.refresher._beginRefresh();
      this.doRefresh(this.refresher);
    });

    
    this.preferitiService.listPreferiti().subscribe((data: Array<Prodotto>) => {
      this.prodotti = data;

      //empty list
      this.emptyList = this.prodotti.length == 0 ? true : false;
      console.log('ionViewDidLoad: ' + this.emptyList);
    });
  }

  ionViewWillEnter(refresher: Refresher) {
    console.log('refresh PreferitiPage');
    this.preferitiService.listPreferiti().subscribe((data: Array<Prodotto>) => {
      this.prodotti = data;

      //empty list
      this.emptyList = this.prodotti.length == 0 ? true : false;
 
    });
  }

  preferito(n: Prodotto) {
    n.preferito=true;
    this.appCtrl.getRootNav().push('ProdottoPage', { prodotto: n });
  }

  doRefresh(refresher: Refresher) {
    this.preferitiService.listPreferiti().subscribe((data: Array<Prodotto>) => {
      this.prodotti = data;

      //empty list
      this.emptyList = this.prodotti.length == 0 ? true : false;
      refresher.complete();
    });
  }

  remove(prodotto: Prodotto, index: number) {
    this.preferitiService.deletePreferito(prodotto).subscribe(() => {
      (this.prodotti).splice(index, 1);
      //empty list
      this.emptyList = this.prodotti.length == 0 ? true : false;
    });
  };
}
