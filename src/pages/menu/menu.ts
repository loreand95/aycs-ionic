import { Component } from '@angular/core';
import { IonicPage, App, NavController, NavParams, Events } from 'ionic-angular';
import { PreferitiService } from '../../services/preferiti.service';
import { CategoriaService } from '../../services/categoria.service';
import { Prodotto } from '../../model/prodotto.model';
import { Categoria } from '../../model/Categoria.model';
import { ProdottoService } from '../../services/prodotto.service';



@IonicPage()
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage {
  
  menu: string="sushi";
  
  sushi: any[];
  piattiTipici: any[];
  bevande: any[];
   
  preferiti: Array<Prodotto>;
  prodotti: Array<Prodotto>;

  constructor(public events: Events, public appCtrl: App, public navCtrl: NavController, public navParams: NavParams, public preferitiService: PreferitiService,public categoriaService: CategoriaService, public prodottoService: ProdottoService) {
  
    this.categoriaService.listCategory('Sushi').subscribe((data: Array<Categoria>) => {
      this.sushi=data;
    });

    this.categoriaService.listCategory('PiattiTipici').subscribe((data: Array<Categoria>) => {
      this.piattiTipici=data;
    });

    this.categoriaService.listCategory('Bevande').subscribe((data: Array<Categoria>) => {
      this.bevande=data;
    });

    this.events.subscribe('reload', () => {
      this.loadPreferiti();
    });
  
  }

  ionViewWillEnter() {
    this.loadPreferiti();
  }

  toggleSection(item) {
    item.open = !item.open;
    this.prodottoService.listProdotti(item.nome).subscribe((data: Array<Prodotto>) => {   
      item.prodotti=data;  
    });
  }

  loadPreferiti(){
    this.preferitiService.listPreferiti().subscribe((data: Array<Prodotto>) => {
      this.preferiti = data;
    });
  }

  isPreferito(prodotto: Prodotto): boolean {
    return this.preferiti.some(x => x.id === prodotto.id);
  }

  prodottoPage(n: Prodotto) {
    n.preferito=this.preferiti.some(x => x.id === n.id)?true:false;
    this.appCtrl.getRootNav().push('ProdottoPage', { prodotto: n});
  }

  removePreferito(prodotto: Prodotto) {
    this.preferitiService.deletePreferito(prodotto).subscribe(() => {
      let index = this.preferiti.indexOf(prodotto);
      this.preferiti.splice(index,1);
    });
  };

  addPreferito(prodotto: Prodotto) {
    this.preferitiService.addPreferito(prodotto).subscribe(() => {
      this.preferiti.push(prodotto);
    });

  };

}
