import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-modal',
  template: `
    <div #myModal class="container">
    <div class="content">
      <p>Instructions/help etc...</p>
      <button (click)="close()">Close</button>
    </div>
    </div>
  `,
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {

  @ViewChild('myModal', {static: false}) modal!: ElementRef;

  open() {
    this.modal.nativeElement.style.display = 'block';
  }

  close() {
    this.modal.nativeElement.style.display = 'none';
  }
}
