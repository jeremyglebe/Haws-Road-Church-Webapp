import { GalleryModalPage } from './../../components/gallery-modal/gallery-modal.page';
import { MediaService } from './../../services/media.service';
import { Component, OnInit } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.page.html',
  styleUrls: ['./gallery.page.scss'],
})
export class GalleryPage implements OnInit {

  constructor(
    private modalCtrl: ModalController,
    private media: MediaService,
    private navCtrl: NavController
  ) { }

  ngOnInit() {
  }

  async viewImage(path, link, caption, featured){
    const image_modal = await this.modalCtrl.create({
      component: GalleryModalPage,
      componentProps: {
        caption: caption,
        link: link,
        path: path,
        featured: featured
      },
      cssClass: 'MyImageModal'
    });
    await image_modal.present();
  }

  addImagePage() {
    this.navCtrl.navigateRoot('/add-file');
  }

}
