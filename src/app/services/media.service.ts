import { AngularFirestore } from 'angularfire2/firestore';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFireStorage } from 'angularfire2/storage';

@Injectable({
  providedIn: 'root'
})
export class MediaService {

  galleryListener: Observable<any>;
  gallery: any;
  featured: any;

  recordsListener: Observable<any>;
  records: any;

  constructor(
    private afs: AngularFirestore,
    private storage: AngularFireStorage
  ) {
    // Reference to gallery collection
    this.galleryListener = this.afs.collection('apps/ccip/gallery').valueChanges();
    this.galleryListener.subscribe((changes) => {
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
      console.log('Changes to recordings: ', changes);
    });
  }

  async deleteImage(link: string, path: string) {

    // First delete the document, but save its order # so we can fix the order
    // after deletion
    const collection = await this.afs.firestore.collection('apps/ccip/gallery')
      .where('link', '==', link)
      .where('path', '==', path);
    const querySnap = await collection.get();
    querySnap.forEach((doc) => {
      // FINALLY WE HAVE A DOCUMENT
      console.log(doc.id, '=>', doc.data());
      // Delete it
      this.afs.collection('apps/ccip/gallery').doc(doc.id).delete();
    });

    await this.storage.ref(path).delete();

  }

  async featureToggle(path: string){

    const collection = await this.afs.firestore
      .collection('apps/ccip/gallery')
      .where('path', '==', path);
    const querySnap = await collection.get();
    querySnap.forEach((doc) => {

      this.afs.collection('apps/ccip/gallery').doc(doc.id).update({
        feature: !(doc.data()['feature'])
      })

    });

  }

}
