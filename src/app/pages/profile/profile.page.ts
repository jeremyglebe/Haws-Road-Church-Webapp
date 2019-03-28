import { AngularFireStorage } from '@angular/fire/storage';
import { UsersService } from './../../services/users.service';
import { Component, OnInit } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  photoURL = 'assets/church_sepia.jpg';
  displayName = '';

  constructor(
    private users: UsersService,
    private camera: Camera,
    private storage: AngularFireStorage
  ) {
    users.getUserPhoto(users.getCurrentUid()).then((url) => {
      if (url) {
        this.photoURL = url;
      }
    });
    users.getUserName(users.getCurrentUid()).then((name) => {
      if (name) {
        this.displayName = name;
      }
    });
  }

  ngOnInit() { }

  async takePhoto() {

    // Camera options
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    };

    // Get the image & info
    const imageData = await this.camera.getPicture(options);
    const base64Image = 'data:image/jpeg;base64,' + imageData;
    const filePath = `ccip/profiles/${this.users.getCurrentUid()}.jpg`;
    const ref = this.storage.ref(filePath);

    // Upload the image
    await ref.putString(base64Image, 'data_url');
    // Get the download URL
    this.photoURL = await ref.getDownloadURL().toPromise();
    // Update the user's info in their doc
    await this.users.setUserPhoto(this.users.getCurrentUid(), this.photoURL);

  }

  async setName() {
    // Update the user's info in their doc
    await this.users.setUserName(this.users.getCurrentUid(), this.displayName);
  }

}
