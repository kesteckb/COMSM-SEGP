import { Component, OnInit } from '@angular/core';
import { NgSocialLinksService } from 'ng-social-links';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {


  welcomeMessage = 'Welcome to SugarRush!'
  aboutMessage = 'This is a game which tracks the sugar consumption of a hobbit. The purpose of this game is to help you understand the amount of sugar in everyday foods and encourage healthier eating patterns.'
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


