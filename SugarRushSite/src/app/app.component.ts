import { Component, ViewChild } from '@angular/core';
import { ModalComponent } from './modal/modal.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sugarRush';
  @ViewChild('modal', {static: false}) modal!: ModalComponent
  openModal() {
    this.modal.open();
  }
}
