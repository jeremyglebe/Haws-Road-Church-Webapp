import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { AngularFirestore } from 'angularfire2/firestore';
import { AngularFireAuth } from 'angularfire2/auth';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  // Collections
  private usersListener: Observable<any>;
  private usersList: any;
  private directory: any[];

  constructor(
    private afs: AngularFirestore,
    private afauth: AngularFireAuth
  ) {

    // Get a listener for the users collection
    this.usersListener = afs.collection('apps/ccip/users').valueChanges();
    this.usersListener.subscribe(async (changes) => {
      // Store users changes in the userList object
      this.usersList = changes;
      console.log('Changes to users: ', changes)

      // Maintaining the directory of public users
      // First clear it so that removed users are no longer in it
      this.directory = [];
      // Now get the public useres
      const directory_snap = await afs.collection('apps/ccip/users').ref.where('public', '==', true).get();
      // For each document, add it to the directory
      directory_snap.docs.forEach(async (doc) => {
        this.directory.push(doc.data());
      });

    });

    // Determines whether login persists between sessions
    afauth.auth.setPersistence('none');

  }

  async register(email: string, password: string) {
    try {
      await this.afauth.auth.createUserWithEmailAndPassword(email, password);
      await this.afs.collection('apps/ccip/users')
        .doc(this.afauth.auth.currentUser.uid).set({
          displayName: '',
          email: this.afauth.auth.currentUser.email,
          phone: '',
          photoURL: '',
          public: false,
          uid: this.afauth.auth.currentUser.uid
        });
    } catch (e) {
      throw e;
    }
  }

  async login(email: string, password: string) {
    try {
      await this.afauth.auth.signInWithEmailAndPassword(email, password);
    } catch (e) {
      throw e;
    }
  }

  async logout() {
    try {
      await this.afauth.auth.signOut();
    } catch (e) {
      throw e;
    }
  }

  getCurrentUid() {
    if (this.afauth.auth.currentUser) {
      return this.afauth.auth.currentUser.uid;
    } else {
      return null;
    }
  }

  getUsersList() {
    return this.usersList;
  }

  getDirectory() {
    return this.directory;
  }

  async getUserName(uid: string) {
    try {
      const docRef = await this.afs.collection('apps/ccip/users').doc(uid).ref.get();
      const doc = docRef.data();
      if (doc['displayName'] && doc['displayName'] !== '') {
        return doc['displayName'];
      } else {
        return null;
      }
    } catch (e) {
      throw e;
    }
  }

  async getUserPhoto(uid: string) {
    try {
      const docRef = await this.afs.collection('apps/ccip/users').doc(uid).ref.get();
      const doc = docRef.data();
      if (doc['photoURL'] && doc['photoURL'] !== '') {
        return doc['photoURL'];
      } else {
        return null;
      }
    } catch (e) {
      throw e;
    }
  }

  async setUserName(uid: string, name: string) {
    try {
      await this.afs.collection('apps/ccip/users')
        .doc(uid).update({
          displayName: name
        });
    } catch (e) {
      throw e;
    }
  }

  async setUserPhoto(uid: string, url: string) {
    try {
      await this.afs.collection('apps/ccip/users')
        .doc(uid).update({
          photoURL: url
        });
    } catch (e) {
      throw e;
    }
  }

}
