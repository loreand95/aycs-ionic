import { Component } from '@angular/core';
import { IonicPage,App, NavController, NavParams} from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public appCtrl: App ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }

  openPages(page) {
    this.appCtrl.getRootNav().push(page);
  }

  openMenu(){
    this.navCtrl.parent.select(2); //Selects the menu tab
  }

}
