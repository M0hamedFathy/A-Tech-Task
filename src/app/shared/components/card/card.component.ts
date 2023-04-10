import { Component, Input, OnInit } from '@angular/core';
import { Deal } from '../../models/response.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input() deal!: Deal;
  @Input() selected: boolean = false;
  constructor() {}

  ngOnInit(): void {}
}
