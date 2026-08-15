import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { company } from '../../data';

interface SlideImage {
  src: string;
  alt: string;
}

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './hero.component.html',
})
export class HeroComponent implements OnInit, OnDestroy {
  readonly company = company;

  readonly slides: SlideImage[] = [
    { src: 'assets/products/solar-street-light.png', alt: 'Solar Street Light' },
    { src: 'assets/products/solar-high-mast.png', alt: 'Solar High Mast Light' },
    { src: 'assets/products/solar-wall-washer-light.png', alt: 'Solar Flood / Wall Washer Light' },
    { src: 'assets/products/solar-home-light.png', alt: 'Solar Home Lighting System' },
    { src: 'assets/products/solar-garden-light.png', alt: 'Solar Garden Light' },
    { src: 'assets/products/solar-lithium-battery.png', alt: 'Solar Lithium Battery' },
    { src: 'assets/products/solar-charge-controller-led-bulb.png', alt: 'Solar Charge Controller & LED Bulb' },
    { src: 'assets/products/solar-pv-modules.png', alt: 'Solar Photovoltaic Modules' },
  ];

  currentSlide = 0;
  private intervalId?: ReturnType<typeof setInterval>;

  ngOnInit(): void {
    this.startAutoplay();
  }

  ngOnDestroy(): void {
    this.stopAutoplay();
  }

  private startAutoplay(): void {
    this.intervalId = setInterval(() => this.next(), 3500);
  }

  private stopAutoplay(): void {
    if (this.intervalId) clearInterval(this.intervalId);
  }

  next(): void {
    this.currentSlide = (this.currentSlide + 1) % this.slides.length;
  }

  prev(): void {
    this.currentSlide = (this.currentSlide - 1 + this.slides.length) % this.slides.length;
  }

  goTo(index: number): void {
    this.currentSlide = index;
    // Restart the timer so manual navigation doesn't fight the autoplay.
    this.stopAutoplay();
    this.startAutoplay();
  }
}
