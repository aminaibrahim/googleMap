import { Component, OnInit } from '@angular/core';
import {  ActivatedRoute, Params } from '@angular/router';


@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit {
lat;
lng;
constructor(
  private activatedRoute: ActivatedRoute,
) {}

ngOnInit() {
  this.activatedRoute.params.subscribe(
    (params: Params) => {
   this.lat = +params['lat'];
   this.lng = +params['long'];

    }
   );
}
}
