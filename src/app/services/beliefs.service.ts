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

  async addBelief(statement: string, scripture: string, order: number){
    this.afs.collection('apps').doc('ccip')
      .collection('beliefs').add({
        statement: statement,
        scripture: scripture,
        order: order
      });
  }

}
