import { Component } from '@angular/core';

@Component({
  selector: 'app-image-slider',
  templateUrl: './image-slider.component.html',
  styleUrls: ['./image-slider.component.css']
})
export class ImageSliderComponent {
  i: number = 0;
  intervalId: any;
  images: string[] = [
    "https://th.bing.com/th/id/OIP.TnnO-9C6THhBBCzOhTe7mQHaFj?w=264&h=199&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    "https://th.bing.com/th/id/OIP.zko-q1wTP2-niX0znNfjkQHaGc?w=229&h=199&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    "https://th.bing.com/th/id/OIP.qk9NxOxGrjQNhNwIo6sT2wHaEo?w=290&h=181&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    "https://th.bing.com/th/id/OIP.qY2mD5FSNg1eVWLr7RdaggHaFj?w=236&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
  ]

  image = this.images[0];
  next() {
    if (this.i < this.images.length - 1) {
      this.i++;
      this.image = this.images[this.i];
    }
  }
  prev() {
    if (this.i > 0) {
      this.i--;
      this.image = this.images[this.i];
    }
  }
  slide() {
    this.intervalId = setInterval(() => {
      this.next();
    }, 2000)
  }
  stop() {
    clearInterval(this.intervalId);
  }
}
