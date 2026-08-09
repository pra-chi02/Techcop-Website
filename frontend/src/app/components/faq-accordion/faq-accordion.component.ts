import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Faq } from '../../data';

@Component({
  selector: 'app-faq-accordion',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './faq-accordion.component.html',
})
export class FaqAccordionComponent {
  @Input() items: Faq[] = [];
  openIndex: number | null = 0;

  toggle(index: number): void {
    this.openIndex = this.openIndex === index ? null : index;
  }
}
