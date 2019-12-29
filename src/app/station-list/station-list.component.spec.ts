import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StationListComponent } from './station-list.component';
import {CommonModule} from '@angular/common';
import {MaterialModule} from '../material/material.module';
import {LeafletModule} from '@asymmetrik/ngx-leaflet';
import {ListComponent} from './list/list.component';
import {DetailsComponent} from './details/details.component';
import {ListService} from '../services/list.service';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {HttpClientModule} from '@angular/common/http';

describe('StationListComponent', () => {
  let component: StationListComponent;
  let fixture: ComponentFixture<StationListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        CommonModule,
        MaterialModule,
        LeafletModule.forRoot(),
        LeafletModule,
        HttpClientTestingModule,
        HttpClientModule
      ],
      declarations: [
        StationListComponent,
        ListComponent,
        DetailsComponent
      ],
      providers: [ListService],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StationListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
