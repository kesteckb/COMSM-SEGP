import { Component, OnInit } from '@angular/core';
import { HobbitService, IHobbit } from '../hobbit.service';
import { ActivatedRoute } from '@angular/router';
//import { Observable } from 'rxjs';


@Component({
  selector: 'app-game-over',
  templateUrl: './game-over.component.html',
  styleUrls: ['./game-over.component.css'],
  providers: [HobbitService]
})
export class GameOverComponent implements OnInit {
   public hobbits: IHobbit[];
   //constructor(private hobbitService: HobbitService, private route: ActivatedRoute) { }

   constructor(private hobbitService: HobbitService, private route: ActivatedRoute) { }

   ngOnInit(): void {
      this.getHobbits();
  }

   getHobbits() {
      this.hobbitService
         .get()
         .subscribe((hobbits: IHobbit[]) => {
            this.hobbits = hobbits;
         });
   }
}
