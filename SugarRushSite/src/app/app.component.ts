import { Component, ViewChild } from '@angular/core';
import { ModalComponent } from './modal/modal.component';
import { FoodItemService } from './fooditem.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [FoodItemService]
})
export class AppComponent {
  title = 'sugarRush';
  @ViewChild('modal', {static: false}) modal!: ModalComponent
  openModal() {
    this.modal.open();
  }
}
