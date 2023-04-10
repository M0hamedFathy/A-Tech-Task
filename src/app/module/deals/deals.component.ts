import { Component, OnInit } from '@angular/core';
import { Deal } from 'src/app/shared/models/response.model';
import { DealsService } from '../deals.service';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { FilterOption } from 'src/app/shared/models/filter-options.interface';
import { debounceTime } from 'rxjs';

@Component({
  selector: 'app-deals',
  templateUrl: './deals.component.html',
  styleUrls: ['./deals.component.scss'],
})
export class DealsComponent implements OnInit {
  deals: Deal[] = [];
  focusArray: Deal[] = [];
  potentialValueArray: Deal[] = [];
  contactMadeArray: Deal[] = [];
  offerSentArray: Deal[] = [];
  gettingReadyArray: Deal[] = [];
  selectedIndex!: number;
  selectedArray!: Deal[];
  segmentArray: FilterOption[] = [
    { display: 'Segment A (21)', id: 'segmentA', selected: false },
    { display: 'Segment B (7)', id: 'segmentB', selected: false },
    { display: 'Segment C (14)', id: 'segmentC', selected: false },
  ];

  constructor(private dealService: DealsService) {
    this.dealService.searchTerm
      .pipe(debounceTime(750))
      .subscribe((searchTerm) => {
        const filteredArray: Deal[] = [];

        this.deals.forEach((deal) => {
          if (
            this._fuzzySearch(
              searchTerm.toLowerCase(),
              deal.company.toLowerCase()
            )
          ) {
            filteredArray.push(deal);
          }
        });
        this._extractDeals(filteredArray);
      });
  }

  ngOnInit() {
    this._getData();
  }

  onSelect(i: number, array: Deal[]) {
    this.deals.forEach((item) => (item.selected = false));
    this.selectedIndex = i;
    this.selectedArray = array;
    array[i].selected = true;
  }

  onDelete() {
    this.selectedArray.splice(this.selectedIndex, 1);
    const selectedDeal = this.deals.find((deal) => deal.selected);
    const selectedDealIndex = this.deals.findIndex(
      (deal) => deal.id === selectedDeal?.id
    );
    this.deals.splice(selectedDealIndex, 1);
    this.selectedIndex = -1;
  }
  private _getData() {
    this.dealService.getDeals().subscribe((data) => {
      const mappedData = data.deals.map((data) => ({
        ...data,
        selected: false,
      }));
      this._extractDeals(mappedData);
      this.deals = mappedData;
    });
  }

  private _fuzzySearch(search: string, target: string): boolean {
    let searchIndex = 0;
    for (let targetIndex = 0; targetIndex < target.length; targetIndex++) {
      if (search[searchIndex] === target[targetIndex]) {
        searchIndex++;
      }

      if (searchIndex === search.length) {
        return true;
      }
    }

    return false;
  }

  private _extractDeals(deals: Deal[]) {
    this.dealService.dealsNumber.next(deals.length);
    this.focusArray = [];
    this.potentialValueArray = [];
    this.gettingReadyArray = [];
    this.offerSentArray = [];
    this.contactMadeArray = [];

    deals.forEach((deal: Deal) => {
      switch (deal.status) {
        case 'Focus':
          this.focusArray.push(deal);
          break;
        case 'Potential Value':
          this.potentialValueArray.push(deal);
          break;
        case 'Contact Made':
          this.contactMadeArray.push(deal);
          break;
        case 'Offer Sent':
          this.offerSentArray.push(deal);
          break;
        case 'Getting Ready':
          this.gettingReadyArray.push(deal);
          break;
      }
    });
  }

  onSearch(event: Event) {
    let searchTerm = (event.target as HTMLInputElement).value;
    this.dealService.searchTerm.next(searchTerm);
  }

  drop(event: CdkDragDrop<Deal[]>) {
    this.deals.forEach((deal) => (deal.selected = false));
    this.selectedIndex = -1;
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }
}
