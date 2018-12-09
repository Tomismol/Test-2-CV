//Tom Smolarek 1801495

import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Tabs } from 'ionic-angular';
 
@IonicPage()
@Component({
  selector: 'page-skills-tabs',
  templateUrl: 'skills-tabs.html',
})
export class SkillsTabsPage {
  @ViewChild('myTabs') tabRef: Tabs;
 
  //connecting the tabs with the pages
  tab1 = 'SoftSkillsPage';
  tab2 = 'TechSkillsPage';

  
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