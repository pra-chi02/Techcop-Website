
import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { company } from '../../data';
import { TranslationService } from '../../services/translation.service';

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

  constructor(public translate: TranslationService) {}

  readonly slides: SlideImage[] = [
    {
      src: 'assets/products/solar-street-light.png',
      alt: 'Solar Street Light',
    },
    {
      src: 'assets/products/solar-high-mast.png',
      alt: 'Solar High Mast Light',
    },
    {
      src: 'assets/products/real/flood-light-real.jpg',
      alt: 'Solar Flood / Wall Washer Light',
    },
    {
      src: 'assets/products/solar-home-light.png',
      alt: 'Solar Home Lighting System',
    },
    {
      src: 'assets/products/solar-garden-light.png',
      alt: 'Solar Garden Light',
    },
    {
      src: 'assets/products/solar-lithium-battery.png',
      alt: 'Solar Lithium Battery',
    },
    {
      src: 'assets/products/solar-charge-controller-led-bulb.png',
      alt: 'Solar Charge Controller & LED Bulb',
    },
    {
      src: 'assets/products/solar-pv-modules.png',
      alt: 'Solar Photovoltaic Modules',
    },
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
    this.stopAutoplay();

    this.intervalId = setInterval(() => {
      this.next(false);
    }, 3500);
  }

  private stopAutoplay(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = undefined;
    }
  }

  next(restartTimer = true): void {
    this.currentSlide =
      (this.currentSlide + 1) % this.slides.length;

    if (restartTimer) {
      this.restartAutoplay();
    }
  }

  prev(): void {
    this.currentSlide =
      (this.currentSlide - 1 + this.slides.length) %
      this.slides.length;

    this.restartAutoplay();
  }

  goTo(index: number): void {
    this.currentSlide = index;
    this.restartAutoplay();
  }

  private restartAutoplay(): void {
    this.stopAutoplay();
    this.startAutoplay();
  }
}
