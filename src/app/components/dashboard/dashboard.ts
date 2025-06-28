import { Component } from '@angular/core';
import { Page1 } from '../page1/page1';
import { Page2 } from '../page2/page2';
import { Page3 } from '../page3/page3';
@Component({
  selector: 'app-dashboard',
  imports: [Page1 , Page2, Page3],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export class Dashboard {

}
