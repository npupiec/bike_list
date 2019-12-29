import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {StationInterface} from '../model/station-list.interface';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  @Input() bikeList: Array<StationInterface>;
  @Output() index: EventEmitter<number> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  showDetails(el) {
    this.index.emit(el.id)
  }

}
