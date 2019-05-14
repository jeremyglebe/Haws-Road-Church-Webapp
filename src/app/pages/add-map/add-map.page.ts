import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { NavigationService } from 'src/app/services/navigation.service';

@Component({
  selector: 'app-add-map',
  templateUrl: './add-map.page.html',
  styleUrls: ['./add-map.page.scss'],
})
export class AddMapPage implements OnInit {

  public name: string;
  public latitude: string;
  public longitude: string;

  constructor(
    private navCtrl: NavController,
    private navs: NavigationService
  ) { }

  ngOnInit() {
  }

  add(){
    // Add the new map
    this.navs.addMap(this.name, parseFloat(this.latitude), parseFloat(this.longitude));
    this.navCtrl.navigateRoot('/map');
  }

  cancel(){
    this.navCtrl.navigateRoot('/map');
  }

}
