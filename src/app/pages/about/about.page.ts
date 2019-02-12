import { BeliefsService } from './../../services/beliefs.service';
import { AppInfoService } from './../../services/app-info.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.page.html',
  styleUrls: ['./about.page.scss'],
})
export class AboutPage implements OnInit {

  constructor(
    private info: AppInfoService,
    private beliefs: BeliefsService
  ) { }

  ngOnInit() {
  }

}
