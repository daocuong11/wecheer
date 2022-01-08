import { Component, OnInit, OnDestroy } from '@angular/core';
import { DataService } from '../data.service';
import { Image } from './image';

@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.scss']
})

export class ImagesComponent implements OnInit, OnDestroy {

  image = {} as Image;
  imageCount: Number = 0;
  intervalGetHour: any;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.getLastImage();
    this.getImageInHour();
    this.intervalGetHour = setInterval(() => {
      this.getImageInHour();
    }, 5000)
  }

  ngOnDestroy(): void {
    if (this.intervalGetHour) {
      clearInterval(this.intervalGetHour);
    }
  }

  getLastImage() {
    this.dataService.getLastImage().subscribe((data) => {
      this.image = data as Image;
    })
  }

  getImageInHour() {
    this.dataService.getImageInHour().subscribe((count) => {
      this.imageCount = count as Number;
    })
  }
}
