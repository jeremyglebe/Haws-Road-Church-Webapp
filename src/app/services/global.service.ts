import { Platform } from '@ionic/angular';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  public readonly width = this.platform.width();

  public readonly appTabs = [
    {
      // Title for the button
      title: 'Home',
      // URL to direct to
      url: '/home',
      // Icon for buttons
      icon: 'home'
    },
    {
      title: 'About',
      url: '/about',
      icon: 'paper'
    },
    {
      title: 'Contact',
      url: '/contact',
      icon: 'person'
    },
    {
      title: 'Locate',
      url: '/map',
      icon: 'map'
    }
  ];

  constructor(
    private platform: Platform
  ) { }

  smallScreen() {
    return this.width < 640;
  }

}
