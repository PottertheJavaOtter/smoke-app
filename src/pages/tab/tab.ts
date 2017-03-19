import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { Tab } from '../../models/tab.d';
import { TabItem } from '../../models/tabItem.d';
import { TabService } from '../../providers/tab.service';

@Component({
  selector: 'page-tab',
  templateUrl: 'tab.html'
})
export class TabPage {

  tab: Tab;
  tabItems: TabItem[];

  constructor(public navCtrl: NavController, public navParams: NavParams, public tabService: TabService) {
    this.tab = navParams.get('tab');
    console.log(this.tab);
    this.getTabItems(this.tab.id);
  }

  getTabItems(id: number) {
    this.tabService
      .getTabItems(id)
      .then(tabItems => this.tabItems = tabItems);
  }

  addTabItem(sku: number): void {
    this.tabService.addTabItem(sku)
      // .then(hero => {
      //   this.heroes.push(hero);
      //   this.selectedHero = null;
      // });
  }

   

}
