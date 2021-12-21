import { Component, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'app-artwork-card',
  templateUrl: './artwork-card.component.html',
  styleUrls: ['./artwork-card.component.css']
})
export class ArtworkCardComponent implements OnInit {

  @Input() artwork: any;
  constructor() { }

  ngOnInit(): void {
  }

}
