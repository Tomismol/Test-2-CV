//Tom Smolarek 1801495

import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Tabs } from 'ionic-angular';
 
@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {
  @ViewChild('myTabs') tabRef: Tabs;
 
  //connecting the tabs with the pages
  tab1 = 'AboutPage';
  tab2 = 'ProfilePage';
  tab3 = 'ContactPage';
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  //opening the page when sellected
  ionViewDidLoad() {
    let openTab = this.navParams.get('openTab');
    if (openTab) {
      this.tabRef.select(openTab);
    }
  }
 
}