import { Component, OnInit } from '@angular/core';

import { NavController } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
// Observable class extensions
import 'rxjs/add/observable/of';
// Observable operators
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

import { Tab } from '../../models/tab.d';
import { TabService } from '../../providers/tab.service'

import { TabPage } from '../tab/tab';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {

  tabs: Tab[];
  // sort by
  public sortBy = 'Best Match';

  constructor(public navCtrl: NavController,
    public tabService: TabService) {

  }

  ngOnInit(): void {
    this.getTabs();
  }

  getTabs() {
    this.tabService
      .getTabs()
      .then(tabs => this.tabs = tabs);
  }

  viewTab(tab: Tab) {
    this.navCtrl.push(TabPage, {tab: tab});
  }


}
