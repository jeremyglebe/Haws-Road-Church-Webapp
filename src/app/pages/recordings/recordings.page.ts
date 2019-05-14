import { UsersService } from './../../services/users.service';
import { MediaService } from 'src/app/services/media.service';
import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-recordings',
  templateUrl: './recordings.page.html',
  styleUrls: ['./recordings.page.scss'],
})
export class RecordingsPage implements OnInit {

  constructor(
    public media: MediaService,
    private navCtrl: NavController,
    public users: UsersService
  ) { }

  ngOnInit() {
  }

  addRecordPage() {
    this.navCtrl.navigateRoot('/add-file');
  }

}
