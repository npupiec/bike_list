import {Component, OnDestroy, OnInit} from '@angular/core';
import {ListService} from '../services/list.service';
import {Subscription} from 'rxjs/Subscription';
import {StationInterface} from './model/station-list.interface';

@Component({
  selector: 'app-bike-list',
  templateUrl: './station-list.component.html',
  styleUrls: ['./station-list.component.scss']
})
export class StationListComponent implements OnInit, OnDestroy {
  bikeList: Array<StationInterface>;
  index: string;
  lang: number;
  long: number;
  bikes: string;

  sub: Subscription[] = [];

  constructor(private bikeListService: ListService) { }

  ngOnInit() {
    this.sub.push(
      this.bikeListService.getList().subscribe(data => this.bikeList = data.features)
    )
  }

  getId(index: string) {
    this.index = index;

    this.bikeList.filter(item => {
      if (item.id === this.index) {
        this.bikes = item.properties.bikes;
        this.lang = item.geometry.coordinates[0];
        this.long =  item.geometry.coordinates[1];
      }
    })
  }

  ngOnDestroy(): void {
    this.sub.forEach(sub => sub.unsubscribe());
  }
}
