import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-locked-village',
  templateUrl: './locked-village.component.html',
  styleUrls: ['./locked-village.component.css']
})
export class LockedVillageComponent implements OnInit {

  @Input() count: number;

  constructor() { }

  ngOnInit(): void {
  }

}
