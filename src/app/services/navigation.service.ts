import { AngularFirestore } from 'angularfire2/firestore';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {

  navsListener: Observable<any>;
  navs: any;

  constructor(private afs: AngularFirestore) {

    // Get a listener for the users collection
    this.navsListener = afs.collection('apps/ccip/navigation').valueChanges();
    this.navsListener.subscribe((changes) => {
      // Store users changes in the userList object
      this.navs = changes;
      console.log('Changes to users: ', changes)
    });

  }

  async addMap(name: string, lat: number, lon: number) {
    // If there are no conflicts, just add the document
    this.afs.collection('apps/ccip/navigation').add({
      name: name,
      lat: lat,
      lon: lon
    });
  }

  async deleteMap(lat: number, lon: number) {

    // First delete the document, but save its order # so we can fix the order
    // after deletion
    const collection = await this.afs.firestore.collection('apps/ccip/navigation')
      .where('lat', '==', lat)
      .where('lon', '==', lon);
    const querySnap = await collection.get();
    querySnap.forEach((doc) => {
      // FINALLY WE HAVE A DOCUMENT
      console.log(doc.id, '=>', doc.data());
      // Delete it
      this.afs.collection('apps/ccip/navigation').doc(doc.id).delete();
    });

  }

}
