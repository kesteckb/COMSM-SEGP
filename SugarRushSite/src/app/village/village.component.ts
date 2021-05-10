import { Component, OnInit } from '@angular/core';
import { HouseService, IHouse } from '../house.service';
import { HobbitService, IHobbit } from '../hobbit.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-village',
  templateUrl: './village.component.html',
  styleUrls: ['./village.component.css'],
})
export class VillageComponent implements OnInit {
   public houses: IHouse[];
   villageCount = [2, 3];

   constructor(private houseService: HouseService, private hobbitService: HobbitService, private route: ActivatedRoute) { }

   ngOnInit(): void {
      this.getHouses();
      this.hobbitService.getHobbits();
   }

   getHouses() {
      this.houseService
         .get()
         .subscribe((houses: IHouse[]) => {
            this.houses = houses;
         });
   }
}
