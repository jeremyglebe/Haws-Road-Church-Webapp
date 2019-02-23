import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { AngularFirestore } from 'angularfire2/firestore';

@Injectable({
  providedIn: 'root'
})
export class BeliefsService {

  // Listener for the document that contains app information
  beliefsListener: Observable<any>;
  beliefs: any;

  constructor(private afs: AngularFirestore) {
    // Reference to beliefs collection
    this.beliefsListener = this.afs.collection('apps/ccip/beliefs', ref => ref.orderBy('order')).valueChanges();
    this.beliefsListener.subscribe((changes) => {
      this.beliefs = changes;
      console.log('Changes to beliefs: ', changes);
    });
  }

  async addBelief(statement: string, scripture: string, order: number) {
    // We don't want to let the order number be larger than the list. It should
    // not place the belief farther than the end of the list.
    const collection = await this.afs.collection('apps/ccip/beliefs')
      .ref.get();
    if (order > collection.docs.length) {
      order = collection.docs.length + 1;
    }

    /* There are two ways to handle this depending on if there is another
     * belief document with the same order number. So first we need to figure
     * that out. We'll do this by just making a query for docs with that order
     * and then checking the length of the returned list.*/
    let num_conflicts;
    const snap = await this.afs.collection('apps/ccip/beliefs')
      .ref.where('order', '==', order).get();
    num_conflicts = snap.docs.length;

    // If a confliction exists, we're gonna do some tricky stuff
    if (num_conflicts > 0) {
      // First, get a list of the documents with order >= the new docs order
      const snapshot = await this.afs.collection('apps/ccip/beliefs')
        .ref.where('order', '>=', order).get();
      // For each of these documents, we want to increase the order by 1
      snapshot.docs.forEach((docSnap) => {
        const new_order = docSnap.data()['order'] + 1;
        this.afs.doc('apps/ccip/beliefs/' + docSnap.id).update(
          {
            'order': new_order
          });
      });
    }

    // If there are no conflicts, just add the document
    this.afs.collection('apps').doc('ccip')
      .collection('beliefs').add({
        statement: statement,
        scripture: scripture,
        order: order
      });

  }

  async deleteBelief(statement: string, scripture: string) {
    let order;

    // First delete the document, but save its order # so we can fix the order
    // after deletion
    const collection = await this.afs.firestore.collection('apps/ccip/beliefs')
      .where('statement', '==', statement)
      .where('scripture', '==', scripture);
    const querySnap = await collection.get();
    querySnap.forEach((doc) => {
      // FINALLY WE HAVE A DOCUMENT
      console.log(doc.id, '=>', doc.data());
      // Save this documents order
      order = doc.data()['order'];
      // Delete it
      this.afs.collection('apps/ccip/beliefs').doc(doc.id).delete();
    });

    // Now we need to correct the order of docs
    // Get list of docs with order >= the deleted docs order
    const snapshot = await this.afs.collection('apps/ccip/beliefs')
      .ref.where('order', '>=', order).get();
    // For each of these documents, we want to decrease the order by 1
    snapshot.docs.forEach((docSnap) => {
      const new_order = docSnap.data()['order'] - 1;
      this.afs.doc('apps/ccip/beliefs/' + docSnap.id).update(
        {
          'order': new_order
        });
    });
  }

}
