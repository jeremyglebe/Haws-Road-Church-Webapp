
import { Component, OnInit } from '@angular/core';

import { GlobalService } from './../../services/global.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-page-tabs',
  templateUrl: './page-tabs.component.html',
  styleUrls: ['./page-tabs.component.scss']
})
export class PageTabsComponent implements OnInit {

  constructor(
    private global: GlobalService,
    private navCtrl: NavController
  ) { }

  ngOnInit() {
  }

  reroute(url) {
    this.navCtrl.navigateRoot(url);
  }

}
