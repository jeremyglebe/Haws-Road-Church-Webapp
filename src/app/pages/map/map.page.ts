import { Component, OnInit } from '@angular/core';
import { NavigationService } from 'src/app/services/navigation.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.page.html',
  styleUrls: ['./map.page.scss'],
})
export class MapPage implements OnInit {

  private defaultURL = 'https://www.google.com/maps/embed?'
  + 'pb=!1m18!1m12!1m3!1d26488.35765778549!2d-98.63686088087091!3d33.914248920656696'
  + '!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8653230c575792db%3A0xee0c07ad6cdbb4c4'
  + '!2sHaws+Road+Community+Church!5e0!3m2!1sen!2sus!4v1542121082574';
  mapURL = this.defaultURL;

  constructor(
    private navs: NavigationService
  ) { }

  ngOnInit() {
  }

  mapFrom(lat: number, lon: number) {
    this.mapURL = 'https://maps.google.com?saddr='
      + lat.toString() + ',' + lon.toString()
      + '&daddr=33.9145604,-98.62363219999999&output=embed';
  }

  mapReset(){
    this.mapURL = this.defaultURL;
  }

}
