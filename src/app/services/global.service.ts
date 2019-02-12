import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  public readonly appPages = [
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
    }
  ];

  constructor() { }
}
