import { MediaService } from './../../../services/media.service';
import { Component, OnInit } from '@angular/core';

import { AppInfoService } from './../../../services/app-info.service';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {

  public slideOpts = {};

  constructor(
    public info: AppInfoService,
    public media: MediaService
  ) { }

  ngOnInit() {
  }

}
