import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-village',
  templateUrl: './village.component.html',
  styleUrls: ['./village.component.css']
})
export class VillageComponent implements OnInit {

  villageCount = [1, 2, 3];

  constructor() { }

  ngOnInit(): void {
  }

}