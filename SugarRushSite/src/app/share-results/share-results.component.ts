import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ShareModalComponent } from '../share-modal/share-modal.component'

@Component({
   selector: 'app-share-results',
   templateUrl: './share-results.component.html',
   styleUrls: ['./share-results.component.css']
})
export class ShareResultsComponent implements OnInit {


   constructor(public dialog: MatDialog) { }

   openDialog(){
      const dialogRef = this.dialog.open(ShareModalComponent);
      dialogRef.afterClosed().subscribe(result => {
         console.log(`Dialog result: $(result)`);
      });
   }

   ngOnInit(): void {
   }

}
