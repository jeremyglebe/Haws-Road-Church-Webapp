import { MediaService } from './../../services/media.service';
import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-add-file',
  templateUrl: './add-file.page.html',
  styleUrls: ['./add-file.page.scss'],
})
export class AddFilePage implements OnInit {

  constructor(
    private navCtrl: NavController,
    private media: MediaService
  ) { }

  ngOnInit() {
  }

  cancel(){
    this.navCtrl.navigateRoot('/gallery');
  }

}
