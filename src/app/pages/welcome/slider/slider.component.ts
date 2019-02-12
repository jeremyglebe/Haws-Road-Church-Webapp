import { Component, OnInit } from '@angular/core';

import { AppInfoService } from './../../../services/app-info.service';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {

  private slideOpts = {};

  constructor(
    private info: AppInfoService
  ) { }

  ngOnInit() {
  }

}
