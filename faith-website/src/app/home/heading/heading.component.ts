import { Component, OnInit } from '@angular/core';
import { HelperService } from 'src/app/core/services/helper.service';
import { HeadingConstants } from './heading.constants';

@Component({
  selector: 'app-heading',
  templateUrl: './heading.component.html',
  styleUrls: ['./heading.component.css']
})
export class HeadingComponent implements OnInit {

  //variables
  imageUrl : string;

  //constructor
  constructor(private helperService: HelperService) { }

  //This is the proper place to "load items"
  ngOnInit() {
    this.loadAssets();
  }

  loadAssets() {
    //load assets in this manner
    this.imageUrl = this.helperService.getResourceUrl(HeadingConstants.testImageUrl, true);
  }

}
