import { Component, OnInit, Input, ChangeDetectorRef } from '@angular/core';
import { AngularFireStorage, AngularFireUploadTask } from '@angular/fire/storage';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { finalize, tap } from 'rxjs/operators';
import { fileURLToPath } from 'url';

@Component({
  selector: 'upload-task',
  templateUrl: './upload-task.component.html',
  styleUrls: ['./upload-task.component.scss']
})
export class UploadTaskComponent implements OnInit {

  @Input() file: File;
  @Input() caption: string;

  task: AngularFireUploadTask;

  percentage: Observable<number>;
  snapshot: Observable<any>;
  downloadURL: string;

  constructor(private storage: AngularFireStorage, private db: AngularFirestore) { }

  ngOnInit() {
    if (this.caption === '') {
      this.caption = 'No caption...';
    }
    this.startUpload();
  }

  startUpload() {

    // Get the type of file
    const type = this.file.type.split('/')[0];

    // Client-side validation example
    if (type !== 'image'
      && type !== 'audio'
      && type !== 'video'
    ) {
      console.error('unsupported file type :( ')
      return;
    }

    // The storage path
    let path = `ccip/`;
    // Different path based on type
    switch (type) {
      case 'image':
        path += `images/${new Date().getTime()}_${this.file.name}`;
        break;
      case 'audio':
        path += `audio/${new Date().getTime()}_${this.file.name}`;
        break;
      case 'video':
        path += `videos/${new Date().getTime()}_${this.file.name}`;
        break;
      default:
        break;
    }

    // Reference to storage bucket
    const ref = this.storage.ref(path);

    // The main task
    this.task = this.storage.upload(path, this.file);

    // Progress monitoring
    this.percentage = this.task.percentageChanges();

    this.snapshot = this.task.snapshotChanges().pipe(
      tap(console.log),
      // The file's download URL
      finalize(async () => {
        this.downloadURL = await ref.getDownloadURL().toPromise();

        switch (type) {
          case 'image':
            // Update firestore on completion
            this.db.collection('apps/ccip/gallery')
              .add({
                path,
                time: new Date(),
                caption: this.caption,
                feature: false,
                link: this.downloadURL,
                userID: 'ids are not implemented yet',
                type: type
              });
            break;
          case 'audio':
          case 'video':
          // Update firestore on completion
          this.db.collection('apps/ccip/recordings')
            .add({
              path,
              time: new Date(),
              caption: this.caption,
              feature: false,
              link: this.downloadURL,
              userID: 'ids are not implemented yet',
              type: type
            });
            break;
          default:
            break;
        }

      }),
    );
  }

  isActive(snapshot) {
    return snapshot.state === 'running' && snapshot.bytesTransferred < snapshot.totalBytes;
  }

}