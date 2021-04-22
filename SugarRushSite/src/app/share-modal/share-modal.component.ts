import { Component, OnInit } from '@angular/core';
import { NgSocialLinksService } from 'ng-social-links';

@Component({
   selector: 'app-share-modal',
   templateUrl: './share-modal.component.html',
   styleUrls: ['./share-modal.component.css']
})
export class ShareModalComponent implements OnInit {
   facebookShareLink: String;
   twitterShareLink: String;
   redditShareLink: String;

   constructor(private socialLinks: NgSocialLinksService) { }

   ngOnInit(): void {
      this.facebookShareLink = this.socialLinks.getShareLink('fb');
      this.twitterShareLink = this.socialLinks.getShareLink('tw');
      this.redditShareLink = this.socialLinks.getShareLink('re');

   }

}
