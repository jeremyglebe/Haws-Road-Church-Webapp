import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { AngularFirestore } from 'angularfire2/firestore';

@Injectable({
  providedIn: 'root'
})
export class AppInfoService {

  // Listener for the document that contains app information
  infoListener: Observable<any>;
  info: any;

  constructor(private afs: AngularFirestore) {
    this.infoListener = afs.doc('apps/ccip').valueChanges();
    this.infoListener.subscribe((changes) => {
      this.info = changes;
      console.log('Changes to app document: ', changes);
    });
  }
}
