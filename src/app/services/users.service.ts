import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { AngularFirestore } from 'angularfire2/firestore';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  usersListener: Observable<any>;
  directoryListener: Observable<any>;
  userList: any;
  directory: any;

  constructor(private afs: AngularFirestore) {

    // Get a listener for the users collection
    this.usersListener = afs.collection('apps/ccip/users').valueChanges();
    this.usersListener.subscribe((changes) => {
      // Store users changes in the userList object
      this.userList = changes;
      console.log('Changes to users: ', changes)
    });

    // Get a listener for the directory collection
    this.directoryListener = afs.collection('apps/ccip/directory').valueChanges();
    this.directoryListener.subscribe((changes) => {
      // Store directory changes in the directory object
      this.directory = changes;
      console.log('Changes to directory: ', changes)
    });

  }
}
