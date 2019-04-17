import { UsersService } from './../../services/users.service';
import { MediaService } from './../../services/media.service';
import { Component, OnInit } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
import { GalleryModalComponent } from 'src/app/components/gallery-modal/gallery-modal.component';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.page.html',
  styleUrls: ['./gallery.page.scss'],
})
export class GalleryPage implements OnInit {

  constructor(
    private modalCtrl: ModalController,
    public media: MediaService,
    private navCtrl: NavController,
    public users: UsersService
  ) { }

  ngOnInit() {
  }

  async viewImage(path, link, caption, featured){
    const image_modal = await this.modalCtrl.create({
      component: GalleryModalComponent,
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
