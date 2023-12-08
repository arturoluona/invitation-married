import { Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-section-fourth',
  templateUrl: './section-fourth.component.html',
  styleUrls: ['./section-fourth.component.scss']
})
export class SectionFourthComponent implements OnInit, OnDestroy {

  imgHistory = '../../../assets/a-m-1.jpg'

  images = [
    '../../../assets/a-m-1.jpg',
    '../../../assets/a-m-2.jpg',
    '../../../assets/a-m-3.jpg',
    '../../../assets/a-m-4.jpg',
    '../../../assets/a-m-5.jpg',
    '../../../assets/a-m-6.jpg',
    '../../../assets/a-m-7.jpg',
    '../../../assets/a-m-8.jpg',
  ]

  currentImageIndex = 0;
  interval: any;

  constructor(private cdr: ChangeDetectorRef) { }

  ngOnInit() {
    this.startImageRotation();
  }

  startImageRotation() {
    this.interval = setInterval(() => {
      this.imgHistory = this.images[this.currentImageIndex];
      this.cdr.detectChanges();

      this.currentImageIndex++;
      if (this.currentImageIndex === this.images.length) {
        this.currentImageIndex = 0;
      }
    }, 3000);
  }

  ngOnDestroy() {
    clearInterval(this.interval);
  }
}
