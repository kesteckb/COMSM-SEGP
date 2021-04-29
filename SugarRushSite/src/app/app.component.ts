import { Component, ViewChild } from '@angular/core';
import { ModalComponent } from './modal/modal.component';
import { DataService } from './data.service';
import { HobbitService } from './hobbit.service';
import { FoodItemService } from './fooditem.service';
import { HouseService } from './house.service';

@Component({
   selector: 'app-root',
   templateUrl: './app.component.html',
   styleUrls: ['./app.component.css'],
   providers: [
      DataService,
      HobbitService,
      FoodItemService,
      HouseService
   ]
})
export class AppComponent {
  title = 'sugarRush';
  @ViewChild('modal', {static: false}) modal!: ModalComponent
  openModal() {
    this.modal.open();
  }
}
