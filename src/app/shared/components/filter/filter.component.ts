import { Component, Input, OnInit } from '@angular/core';
import { FilterOption } from '../../models/filter-options.interface';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
})
export class FilterComponent implements OnInit {
  @Input() filterName: string = '';
  @Input() options: FilterOption[] = [];

  selectedOption: string = 'All';
  isExpanded: boolean = false;
  constructor() {}

  ngOnInit(): void {}
}
