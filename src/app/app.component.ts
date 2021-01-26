import { Component } from '@angular/core';
import {restaurantsData} from "./restuarant_dummy";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'restuarantApp';
  resturants= restaurantsData;




}
