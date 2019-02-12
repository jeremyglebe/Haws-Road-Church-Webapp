import { Component, OnInit } from '@angular/core';

import { UsersService } from './../../services/users.service';
import { AppInfoService } from './../../services/app-info.service';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.page.html',
  styleUrls: ['./contact.page.scss'],
})
export class ContactPage implements OnInit {

  constructor(
    private users: UsersService,
    private info: AppInfoService
  ) { }

  ngOnInit() {
  }

}
