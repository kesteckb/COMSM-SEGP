import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MealModalComponent } from '../meal-modal/meal-modal.component';
import { HobbitService } from '../hobbit.service';

@Component({
   selector: 'app-meal-summary',
   templateUrl: './meal-summary.component.html',
   styleUrls: ['./meal-summary.component.css']
})
export class MealSummaryComponent implements OnInit {
   constructor(private hobbitService: HobbitService, public dialog: MatDialog) { }
   openDialog(){
      const dialogRef = this.dialog.open(MealModalComponent, {data : {hobbitService: this.hobbitService}});
      dialogRef.afterClosed().subscribe(result => {
         console.log(`Dialog result: $(result)`);
      });
   }

   ngOnInit(): void {};
}
