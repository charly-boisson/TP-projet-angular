import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-ns-card',
  templateUrl: './ns-card.component.html',
  styleUrls: ['./ns-card.component.less']
})
export class NsCardComponent implements OnInit {

  @Input() title: string;

  constructor() { }

  ngOnInit() {
  }

}
