import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-record-card',
  templateUrl: './record-card.component.html',
  styleUrls: ['./record-card.component.scss']
})
export class RecordCardComponent implements OnInit {

  @Input() record_info: any = {
    caption: 'Audio file',
    feature: false,
    link: 'link.net/link',
    path: 'test.mpg',
    time: null,
    type: 'audio',
    userid: '???'
  };

  constructor() {}

  ngOnInit() {
  }

}
