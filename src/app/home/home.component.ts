import { Component, OnInit } from '@angular/core';
import { restaurantsData } from '../restuarant_dummy';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent  {

  resturants= restaurantsData;

}
