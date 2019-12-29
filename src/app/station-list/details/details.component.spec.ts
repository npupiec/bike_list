import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsComponent } from './details.component';
import {MaterialModule} from '../../material/material.module';
import {ListService} from '../../services/list.service';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {LeafletModule} from '@asymmetrik/ngx-leaflet';
import {HttpClientModule} from '@angular/common/http';

describe('DetailsComponent', () => {
  let component: DetailsComponent;
  let fixture: ComponentFixture<DetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailsComponent ],
      imports: [
        MaterialModule,
        HttpClientModule,
        HttpClientTestingModule,
        LeafletModule.forRoot(),
        LeafletModule
      ],
      providers: [ListService],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
