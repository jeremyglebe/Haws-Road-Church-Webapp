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

}
