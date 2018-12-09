//Tom Smolarek 1801495

import { Component, ViewChild } from '@angular/core';
import { NavController, Nav, IonicPage } from 'ionic-angular';
 
@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  @ViewChild(Nav) nav: Nav;
  pages: Array<{title: string, component: any, openTab? : any}>;
  rootPage = 'TabsPage';
 
  //connecting the Pages with the title in the menu
  constructor(public navCtrl: NavController) {
    this.pages = [
      { title: 'Home', component: 'TabsPage', openTab: 1 },
      { title: 'Skills', component: 'SkillsTabsPage', openTab: 1 },
      { title: 'Projects', component: 'ProjectTabsPage', openTab: 1 },
      { title: 'Extra Curriculum activities', component: 'ExtraPage' },
      { title: 'Logout', component: 'LoginPage' },
    ];
  }
 
  openPage(page) {
    this.nav.setRoot(page.component, { openTab: page.openTab });
  }
}