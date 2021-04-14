import { Component, ViewChild } from '@angular/core';
import { ModalComponent } from './modal/modal.component';
import { HobbitService } from './hobbit.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [HobbitService]
})
export class AppComponent {
  title = 'sugarRush';
  @ViewChild('modal', {static: false}) modal!: ModalComponent
  openModal() {
    this.modal.open();
  }
}
