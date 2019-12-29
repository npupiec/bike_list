import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app.routing.module';
import {HttpClientModule} from '@angular/common/http';
import {StationListModule} from './station-list/station-list.module';
import {ListService} from './services/list.service';
import {APP_BASE_HREF} from '@angular/common';
import {HttpClientTestingModule} from '@angular/common/http/testing';
describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
      ],
      imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        StationListModule,
        HttpClientTestingModule,
      ],
      providers: [
        ListService,
        {provide: APP_BASE_HREF, useValue: '/'}
        ],
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'app'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('app');
  }));
});
