import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-unlocked-village',
  templateUrl: './unlocked-village.component.html',
  styleUrls: ['./unlocked-village.component.css']
})
export class UnlockedVillageComponent implements OnInit {

  @Input() count: number;

  constructor() { }

  ngOnInit(): void {
  }

}
