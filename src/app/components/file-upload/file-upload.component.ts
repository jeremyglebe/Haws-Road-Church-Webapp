import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss']
})
export class FileUploadComponent implements OnInit {
  @Output() changed = new EventEmitter();

  constructor() { }

  ngOnInit() {
    const uploadButton = document.querySelector('.browse-btn');
    const fileInfo = document.querySelector('.file-info');
    const realInput = <HTMLInputElement>document.getElementById('real-input');
    uploadButton.addEventListener('click', () => {
      realInput.click();
    });
    realInput.addEventListener('change', () => {
      const name = realInput.value.split(/\\|\//).pop();
      const truncated = name.length > 20
        ? name.substr(name.length - 20)
        : name;
      fileInfo.innerHTML = truncated;
    });
  }

  change(stuff: any) {
    this.changed.emit(stuff);
  }

}
