import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListComponent } from './list.component';
import {MaterialModule} from '../../material/material.module';
import {ListService} from '../../services/list.service';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {LeafletModule} from '@asymmetrik/ngx-leaflet';

describe('ListComponent', () => {
  let component: ListComponent;
  let fixture: ComponentFixture<ListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListComponent ],
      imports: [
        MaterialModule,
        HttpClientTestingModule,
        LeafletModule.forRoot(),
        LeafletModule
      ],
      providers: [ListService],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
