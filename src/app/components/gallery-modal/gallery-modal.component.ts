import { GlobalService } from './../../services/global.service';
import { Component, OnInit } from '@angular/core';
import { NavParams, ModalController } from '@ionic/angular';
import { MediaService } from 'src/app/services/media.service';

@Component({
  selector: 'app-gallery-modal',
  templateUrl: './gallery-modal.component.html',
  styleUrls: ['./gallery-modal.component.scss'],
})
export class GalleryModalComponent implements OnInit {

  public caption;
  public link;
  public path;
  public featured;

  constructor(
    private params: NavParams,
    public g: GlobalService,
    private modalCtrl: ModalController,
    private media: MediaService
  ) { }

  ngOnInit() {
  }

  async feature(){
    await this.media.featureToggle(this.path);
    await this.modalCtrl.dismiss();
  }

  async close(){
    await this.modalCtrl.dismiss();
  }

  async delete(){
    await this.media.deleteImage(this.link, this.path);
    await this.modalCtrl.dismiss();
  }

}
