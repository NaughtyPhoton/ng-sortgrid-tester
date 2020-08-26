import { Component, VERSION } from '@angular/core';
import { ajax } from 'rxjs/ajax';
import {
  pluck
} from 'rxjs/operators';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular ' + VERSION.major;

  colors = [
    'Blue', 
    'Aqua', 
    'BlueViolet', 
    'Brown', 
    'BurlyWood',
    'CadetBlue',
    'Chocolate',
    'CornflowerBlue',
    'Crimson'
  ]

    
  storeNewOrder(event) {
    console.log(this.colors)
    console.log(event)
  }

}
