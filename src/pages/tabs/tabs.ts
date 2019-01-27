import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Events, Tabs } from 'ionic-angular';
import { HOME_PAGE, PREFERITI_PAGE, MENU_PAGE } from '../pages';

@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {

  @ViewChild('mytabs') tabRef: Tabs;

  tab1Root = HOME_PAGE;
  tab2Root = PREFERITI_PAGE;
  tab3Root = MENU_PAGE;

  constructor(public navCtrl: NavController, public navParams: NavParams, public events: Events) {
  }

  ionViewDidLoad() {
    console.log("Tabs");
  }

}
