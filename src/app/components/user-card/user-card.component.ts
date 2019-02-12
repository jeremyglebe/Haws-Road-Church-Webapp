import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss']
})
export class UserCardComponent implements OnInit {

  @Input() user_info: any = {
    displayName: "John Doe",
    phone: "(000)000-0000",
    email: "johndoe@mystery.none",
    photoURL: "assets/church_sepia.jpg"
  };

  constructor() { }

  ngOnInit() {
  }

}
