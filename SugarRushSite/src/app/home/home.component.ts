import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  welcomeMessage = 'Welcome to SugarRush!'
  aboutMessage = 'This is a game which tracks the sugar consumption of a hobbit. The purpose of this game is to help you understand the amount of sugar in everyday foods and encourage healthier eating patterns.'
  constructor() { }

  ngOnInit(): void {
  }

}
