import { Component, OnInit } from '@angular/core';
import { NgSocialLinksService } from 'ng-social-links';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {


  welcomeMessage = 'SugarRush!'
  aboutMessage = 'Set out on an adventure to the pantry! Feed your hobbit, track his sugar.'
  facebookShareLink: String;
  twitterShareLink: String;
  redditShareLink: String;

  constructor(private socialLinks: NgSocialLinksService) { 
  }

  ngOnInit(): void {
    this.facebookShareLink = this.socialLinks.getShareLink('fb');
     this.twitterShareLink = this.socialLinks.getShareLink('tw');
     this.redditShareLink = this.socialLinks.getShareLink('re');
  }

}


