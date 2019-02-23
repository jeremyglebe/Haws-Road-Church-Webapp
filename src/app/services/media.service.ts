import { AngularFirestore } from 'angularfire2/firestore';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MediaService {

  galleyListener: Observable<any>;
  gallery: any;
  featured: any;

  recordsListener: Observable<any>;
  records: any;

  constructor(
    private afs: AngularFirestore
  ) {
    // Reference to gallery collection
    this.galleyListener = this.afs.collection('apps/ccip/gallery').valueChanges();
    this.galleyListener.subscribe((changes) => {
      this.gallery = changes;
      console.log('Changes to gallery: ', changes)
      const fpics = [];
      for (const image of this.gallery) {
        if (image.feature) {
          fpics.push(image);
        }
      }
      this.featured = fpics;
      console.log('Changes to featured gallery: ', fpics)
    });
    // Reference to recordings collection
    this.recordsListener = this.afs.collection('apps/ccip/recordings').valueChanges();
    this.recordsListener.subscribe((changes) => {
      this.records = changes;
      console.log('Changes to recordings: ', changes)
    });
  }
}
