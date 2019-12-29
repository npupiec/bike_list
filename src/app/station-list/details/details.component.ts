import {Component, Input, OnChanges, OnInit} from '@angular/core';
import * as L from 'leaflet';
import {StationInterface} from '../model/station-list.interface';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit, OnChanges {

  @Input() bikeList: Array<StationInterface>;
  @Input() index: number;
  @Input() lang: number;
  @Input() long: number;
  @Input() bikes: number;
  layers: L.Layer[] = [];
  options: object;
  location;
  distance: string;

  constructor() { }

  ngOnInit() {
    navigator.geolocation.getCurrentPosition(location => this.location = new L.LatLng(location.coords.latitude, location.coords.longitude));
  }

  ngOnChanges() {
    if (this.lang) {
      this.options = {
        layers: [
          L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
            {maxZoom: 18, attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'}),
        ],
        zoom: 12,
        center: L.latLng([this.long, this.lang]),
      };

      this.layers = [
        L.marker([this.long, this.lang], {
          icon: new L.DivIcon({
            className: 'custom__icon',
            html: '<span class="fas fa-bicycle icon icon__bike" style="font-size: 1.1em; background: #fff; padding: 5px; border-radius: 20px"></span><span style="color: blue; font-size: 2.5em">' + this.bikes + '</span>'
          })
        }),
        L.circleMarker(this.location, {
          opacity: 0.5,
          weight: 10,
          fill: true,
          fillOpacity: 1
        }),
      ];
      this.distance = this.getDistance(this.location, [this.long, this.lang]).toFixed(2);
    }
  }

  getDistance(origin, destination) {
    const lon1 = this.toRadian(origin.lng),
          lat1 = this.toRadian(origin.lat),
          lon2 = this.toRadian(destination[1]),
          lat2 = this.toRadian(destination[0]);

    const deltaLat = lat2 - lat1;
    const deltaLon = lon2 - lon1;

    const a = Math.pow(Math.sin(deltaLat/2), 2) + Math.cos(lat1) * Math.cos(lat2) * Math.pow(Math.sin(deltaLon/2), 2);
    const c = 2 * Math.asin(Math.sqrt(a));
    const EARTH_RADIUS = 6371;
    return c * EARTH_RADIUS * 1000;
  }

  toRadian(degree: number) {
    return degree * Math.PI / 180;
  }
}
